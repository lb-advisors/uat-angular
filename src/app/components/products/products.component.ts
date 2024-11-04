import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { InventoryItem } from 'src/app/models/products.model';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-products', // Updated selector to app-products
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule, InfiniteScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit, OnDestroy { // Renamed to ProductsComponent
  page = 0;
  size = 50;
  searchTerm = '';
  private searchSubject: Subject<string> = new Subject<string>();
  private searchSubscription!: Subscription;

  private inventoryItemsSubject = new BehaviorSubject<InventoryItem[]>([]);
  inventoryItems$ = this.inventoryItemsSubject.asObservable();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadData();

    this.searchSubscription = this.searchSubject
      .pipe(
        distinctUntilChanged(this.trimComparator),
        debounceTime(200),
      )
      .subscribe((searchTerm) => {
        this.searchTerm = searchTerm;
        this.inventoryItemsSubject.next([]);
        this.loadData();
      });
  }

  loadData(): void {
    console.log('loadData');
    this.productService.getProducts(this.page, this.size, this.searchTerm).subscribe({
      next: (products: InventoryItem[]) => {
        const currentData = this.inventoryItemsSubject.value;
        const newData = products.filter(
          (item) => !currentData.some((currentItem) => currentItem.compItemId === item.compItemId)
        );
        this.inventoryItemsSubject.next([...currentData, ...newData]);
      },
    });
  }

  onScroll(): void {
    this.page++;
    this.loadData();
  }

  onSearchChange(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.page = 0;
    this.searchSubject.next(searchTerm);
  }

  private trimComparator(prev: string, curr: string): boolean {
    return prev.trim() === curr.trim();
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }
}
