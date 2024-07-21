import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { InventoryItem } from 'src/app/models/inventoty-item.model';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  imports: [CommonModule, InfiniteScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InventoryComponent implements OnInit, OnDestroy {
  page = 0;
  size = 50;
  searchTerm = '';
  private searchSubject: Subject<string> = new Subject<string>();
  private searchSubscription!: Subscription;

  private inventoryItemsSubject = new BehaviorSubject<InventoryItem[]>([]);
  inventoryItems$ = this.inventoryItemsSubject.asObservable();

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.loadData();

    this.searchSubscription = this.searchSubject
      .pipe(
        distinctUntilChanged(this.trimComparator), // Only emit if value is different from the last value
        debounceTime(200), // Wait 200ms after the last event before emitting last event
      )
      .subscribe((searchTerm) => {
        this.searchTerm = searchTerm;
        this.inventoryItemsSubject.next([]);
        this.loadData();
      });
  }

  loadData(): void {
    console.log('loadData');
    this.inventoryService.getInventoryItems(this.page, this.size, this.searchTerm).subscribe({
      next: (inventoryItems: InventoryItem[]) => {
        const currentData = this.inventoryItemsSubject.value;
        const newData = inventoryItems.filter((item) => !currentData.some((currentItem) => currentItem.id === item.id));
        this.inventoryItemsSubject.next([...currentData, ...newData]); // needed for the scroll
      },
    });
  }

  onScroll(): void {
    this.page++;
    this.loadData();
  }

  onSearchChange(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value;
    if (searchTerm.trim().length > 1) {
      this.page = 0; // Reset page when searching
      this.searchSubject.next(searchTerm);
    }
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
