import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { tap, debounceTime, switchMap } from 'rxjs/operators';

interface InventoryItem {
  id: number;
  compDescription: string;
  unitType: string;
  packSize: string;
  activePrice: number;
  woh: number | null;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  searchQuery: string = '';
  searchSubject: Subject<string> = new Subject<string>();
  displayedInventoryItems$: BehaviorSubject<InventoryItem[]> = new BehaviorSubject<InventoryItem[]>([]);
  isLoading = false;

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.loadAllData();
    this.setupSearchSubscription();
  }

  loadAllData(): void {
    this.isLoading = true;
    this.inventoryService.getInventoryItems()
      .pipe(
        tap(items => {
          this.displayedInventoryItems$.next(items); // Display all items initially
          this.isLoading = false;
        })
      ).subscribe();
  }

  setupSearchSubscription(): void {
    this.searchSubject.pipe(
      debounceTime(100), // Wait for 100ms pause in events
      switchMap(query => {
        this.isLoading = true;
        return this.inventoryService.searchInventoryItems(query).pipe(
          tap(items => {
            this.displayedInventoryItems$.next(items);
            this.isLoading = false;
          })
        );
      })
    ).subscribe();
  }

  onSearchChange(query: string): void {
    this.searchSubject.next(query);
  }
}
