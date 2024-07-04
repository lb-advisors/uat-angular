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
  filters = {
    ItemID: '',
    Product: '',
    UnitType: '',
    PackSize: '',
    Price: '',
    WOH: ''
  };

  allInventoryItems: InventoryItem[] = [];
  displayedInventoryItems$: BehaviorSubject<InventoryItem[]> = new BehaviorSubject<InventoryItem[]>([]);
  isLoading = false;

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.loadAllData();
  }

  loadAllData(): void {
    this.isLoading = true;
    this.inventoryService.getInventoryItems(1, 2000)
      .pipe(
        tap(items => {
          this.allInventoryItems = items;
          this.applyFilters();
        }),
        tap(() => this.isLoading = false)
      ).subscribe();
  }

  applyFilters(): void {
    const filteredItems = this.allInventoryItems
      .filter(item => {
        return (!this.filters.ItemID || item.id.toString().includes(this.filters.ItemID)) &&
               (!this.filters.Product || item.compDescription.toLowerCase().includes(this.filters.Product.toLowerCase())) &&
               (!this.filters.UnitType || item.unitType.toLowerCase().includes(this.filters.UnitType.toLowerCase())) &&
               (!this.filters.PackSize || item.packSize.toString().includes(this.filters.PackSize)) &&
               (!this.filters.Price || item.activePrice.toString().includes(this.filters.Price)) &&
               (!this.filters.WOH || (item.woh && item.woh.toString().includes(this.filters.WOH)));
    });
    this.displayedInventoryItems$.next(filteredItems);
  }
}
