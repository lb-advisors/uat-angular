import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../../services/products.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { InventoryItem } from 'src/app/models/products.model';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { ProductDetailsDialogComponent } from '../product-details-dialog/product-details-dialog.component';

@Component({
  standalone: true,
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule, FormsModule, InfiniteScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit, OnDestroy {
  page = 0;
  size = 50;
  searchTerm = '';
  showRelevantItems = false;

  // Filter dropdowns
  originFilter: string = '';
  unitTypeFilter: string | number = '';
  packSizeFilter: string | number = '';
  buyerFilter: string | number = '';

  // Unique dropdown options
  uniqueOrigins: string[] = [];
  uniqueUnitTypes: (string | number)[] = [];
  uniquePackSizes: (string | number)[] = [];
  uniqueBuyers: (string | number)[] = [];

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
        this.page = 0;
        this.inventoryItemsSubject.next([]);
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

        // Apply relevant items filter if toggled on
        const filteredData = this.showRelevantItems
          ? newData.filter((item) => item.tenSales && item.tenSales > 0)
          : newData;

        // Apply additional filters
        const fullyFilteredData = filteredData.filter((item) => 
          (this.originFilter ? item.origin === this.originFilter : true) &&
          (this.unitTypeFilter ? item.unitType === this.unitTypeFilter : true) &&
          (this.packSizeFilter ? item.packSize === this.packSizeFilter : true) &&
          (this.buyerFilter ? item.buyer === this.buyerFilter : true)
        );

        // Populate unique values for dropdowns
        this.populateUniqueDropdowns(products);

        console.log('API Data Received:', products);
        this.inventoryItemsSubject.next([...currentData, ...fullyFilteredData]);
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
    });
  }

  getUnitType(unitType?: number): string {
    switch (unitType) {
      case 1: return 'Cs';
      case 2: return 'Pcs';
      case 3: return 'Pck';
      case 4: return 'lbs';
      case 5: return 'side';
      default: return 'Unknown';
    }
  }
  populateUniqueDropdowns(products: InventoryItem[]) {
    // Unique Origins - Alphabetized
    this.uniqueOrigins = [...new Set(products.map((item) => item.origin))].filter(Boolean).sort() as string[];
  
    // Unique Unit Types - Converted and Alphabetized
    this.uniqueUnitTypes = [
      ...new Set(products.map((item) => this.getUnitType(item.unitType as number)))
    ]
      .filter((v): v is string => v !== 'Unknown')
      .sort();
  
    // Unique Pack Sizes - Alphabetized
    this.uniquePackSizes = [...new Set(products.map((item) => item.packSize))].filter(Boolean).sort() as (string | number)[];
  
    // Unique Buyers - Alphabetized
    this.uniqueBuyers = [...new Set(products.map((item) => item.buyer))].filter(Boolean).sort() as string[];
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

  // Method to update data when any dropdown filter changes
  onFilterChange(): void {
    this.page = 0;
    this.inventoryItemsSubject.next([]);
    this.loadData();
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
