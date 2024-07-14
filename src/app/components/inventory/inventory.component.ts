import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { InventoryItem } from 'src/app/models/inventoty-item.model';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { NgFor, AsyncPipe, CurrencyPipe } from '@angular/common';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        InfiniteScrollDirective,
        NgFor,
        AsyncPipe,
        CurrencyPipe,
    ],
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
        debounceTime(200), // Wait 300ms after the last event before emitting last event
        distinctUntilChanged(), // Only emit if value is different from the last value
      )
      .subscribe((searchTerm) => {
        this.searchTerm = searchTerm;
        this.loadData();
      });
  }

  loadData(): void {
    this.inventoryService
      .getInventoryItems(this.page, this.size, this.searchTerm)
      .subscribe({
        next: (inventoryItems: InventoryItem[]) => {
          const currentData = this.inventoryItemsSubject.value;
          this.inventoryItemsSubject.next([...currentData, ...inventoryItems]);
        },
      });
  }

  onScroll(): void {
    this.page++;
    this.loadData();
  }

  onSearchChange(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value;
    if (searchTerm.length > 1) {
      this.page = 0; // Reset page when searching
      this.inventoryItemsSubject.next([]);
      this.searchSubject.next(searchTerm);
    }
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }
}
