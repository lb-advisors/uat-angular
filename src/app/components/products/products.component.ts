import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../../services/products.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { InventoryItem } from 'src/app/models/products.model';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { CommonModule } from '@angular/common';
import { ProductDetailsDialogComponent } from '../product-details-dialog/product-details-dialog.component'; // Import the dialog component

@Component({
  standalone: true,
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule, InfiniteScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit, OnDestroy {
  page = 0;
  size = 50;
  searchTerm = '';
  private searchSubject: Subject<string> = new Subject<string>();
  private searchSubscription!: Subscription;

  private inventoryItemsSubject = new BehaviorSubject<InventoryItem[]>([]);
  inventoryItems$ = this.inventoryItemsSubject.asObservable();

  constructor(private productService: ProductService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadData();

    this.searchSubscription = this.searchSubject
      .pipe(
        distinctUntilChanged(this.trimComparator),
        debounceTime(200),
      )
      .subscribe((searchTerm) => {
        this.searchTerm = searchTerm;
        this.inventoryItemsSubject.next([]); // Clear current data for new search
        this.loadData();
      });
  }

  loadData(): void {
    console.log('Loading data...');
    this.productService.getProducts(this.page, this.size, this.searchTerm).subscribe({
      next: (products: InventoryItem[]) => {
        const currentData = this.inventoryItemsSubject.value;
        const newData = products.filter(
          (item) => !currentData.some((currentItem) => currentItem.compItemId === item.compItemId)
        );

        console.log('API Data Received:', products); // Debugging log to verify all fields are received
        this.inventoryItemsSubject.next([...currentData, ...newData]);
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
    });
  }

  onRowClick(item: InventoryItem): void {
    this.dialog.open(ProductDetailsDialogComponent, {
      data: item, // Pass `item` directly, not wrapped in an object
      width: '400px',
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
