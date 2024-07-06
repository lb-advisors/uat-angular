import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

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
  displayedInventoryItems$: BehaviorSubject<InventoryItem[]> = new BehaviorSubject<InventoryItem[]>([]);
  isLoading = false;

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.loadAllData();
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

  applyFilters(): void {
    this.isLoading = true;
    this.inventoryService.searchInventoryItems(this.searchQuery)
      .pipe(
        tap(items => {
          this.displayedInventoryItems$.next(items);
          this.isLoading = false;
        })
      ).subscribe();
  }
}
