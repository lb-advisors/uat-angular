import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../../services/products.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { InventoryItem } from 'src/app/models/products.model';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailsDialogComponent } from '../product-details-dialog/product-details-dialog.component';

@Component({
  standalone: true,
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, InfiniteScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit, OnDestroy {
  page = 0;
  size = 50;
  searchTerm = '';
  showRelevantItems = false;
  showSixtySales = false;
  showWoh = false;
  showYield = false;

  // Filter dropdowns
  originFilter: string = '';
  packSizeFilter: string | number = '';
  buyerFilter: string | number = '';

  // Min CompCost property
  minCompCost: number = 0;

  // Form control
  minCompCostControl = new FormControl('');

  // Unique dropdown options
  uniqueOrigins: string[] = [];
  uniquePackSizes: (string | number)[] = [];
  uniqueBuyers: (string | number)[] = [];

  private searchSubject = new Subject<string>();
  private searchSubscription!: Subscription;

  private inventoryItemsSubject = new BehaviorSubject<InventoryItem[]>([]);
  inventoryItems$ = this.inventoryItemsSubject.asObservable();

  constructor(private productService: ProductService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadData();

    this.searchSubscription = this.searchSubject.pipe(
      distinctUntilChanged(this.trimComparator),
      debounceTime(200)
    ).subscribe((searchTerm) => {
      this.searchTerm = searchTerm;
      this.page = 0;
      this.inventoryItemsSubject.next([]);
      this.loadData();
    });

    // Listen to changes in min compCost input
    this.minCompCostControl.valueChanges.subscribe((value) => {
      this.minCompCost = value ? parseFloat(value) : 0;
      this.onCompCostChange();
    });
  }

  loadData(): void {
    console.log('Starting data load for page:', this.page);
    this.productService.getProducts(this.page, this.size, this.searchTerm).subscribe({
      next: (products: InventoryItem[]) => {
        const currentData = this.inventoryItemsSubject.value;
        const newData = products.filter(
          (item) => !currentData.some((currentItem) => currentItem.compItemId === item.compItemId)
        );

        let filteredData = this.showRelevantItems
          ? newData.filter((item) => item.tenSales && item.tenSales > 0)
          : newData;

        if (this.showSixtySales) {
          filteredData = filteredData.filter((item) => item.sixtySales && item.sixtySales > 0);
        }

        if (this.showWoh) {
          filteredData = filteredData.filter((item) => item.woh && item.woh > 0);
        }

        if (this.showYield) {
          filteredData = filteredData.filter((item) => item.yield && item.yield < 1);
        }

        const fullyFilteredData = filteredData.filter((item) => {
          const compCost = item.compCost ?? 0;
          return (
            (this.originFilter ? item.origin === this.originFilter : true) &&
            (this.packSizeFilter ? item.packSize === this.packSizeFilter : true) &&
            (this.buyerFilter ? item.buyer === this.buyerFilter : true) &&
            (compCost >= this.minCompCost)
          );
        });

        this.populateUniqueDropdowns(products);
        this.inventoryItemsSubject.next([...currentData, ...fullyFilteredData]);
      },
      error: (err) => console.error('Error fetching products:', err),
    });
  }

  onRowClick(item: InventoryItem): void {
    this.dialog.open(ProductDetailsDialogComponent, {
      data: item,
      width: '400px',
    });
  }

  toggleRelevantItemsFilter(): void {
    this.showRelevantItems = !this.showRelevantItems;
    this.page = 0;
    this.inventoryItemsSubject.next([]);
    this.loadData();
  }

  toggleSixtySalesFilter(): void {
    this.showSixtySales = !this.showSixtySales;
    this.page = 0;
    this.inventoryItemsSubject.next([]);
    this.loadData();
  }

  toggleWohFilter(): void {
    this.showWoh = !this.showWoh;
    this.page = 0;
    this.inventoryItemsSubject.next([]);
    this.loadData();
  }

  toggleYieldFilter(): void {
    this.showYield = !this.showYield;
    this.page = 0;
    this.inventoryItemsSubject.next([]);
    this.loadData();
  }

  onFilterChange(): void {
    this.page = 0;
    this.inventoryItemsSubject.next([]);
    this.loadData();
  }

  onCompCostChange(): void {
    this.page = 0;
    this.inventoryItemsSubject.next([]);
    this.loadData();
  }

  onScroll(): void {
    this.page++;
    this.loadData();
  }

  onSearchChange(event: Event): void {
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

  private populateUniqueDropdowns(products: InventoryItem[]): void {
    this.uniqueOrigins = [...new Set(products.map((item) => item.origin))].filter(Boolean).sort() as string[];
    this.uniquePackSizes = [...new Set(products.map((item) => item.packSize))]
        .filter(Boolean)
        .sort((a, b) => Number(a) - Number(b)) as (string | number)[];
    this.uniqueBuyers = [...new Set(products.map((item) => item.buyer))].filter(Boolean).sort() as string[];
  }
}
