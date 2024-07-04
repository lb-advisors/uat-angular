import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  inventoryItems$!: Observable<InventoryItem[]>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.inventoryItems$ = this.http.get<{ content: InventoryItem[] }>('https://uat-pffc.onrender.com/api/inventory?page=1&size=100')
      .pipe(
        map(response => response.content)
      );
  }

  filteredInventoryItems(items: InventoryItem[]) {
    return items
      .sort((a, b) => a.id - b.id) // Sort by ItemID
      .filter(item => {
        return (!this.filters.ItemID || item.id.toString().includes(this.filters.ItemID)) &&
               (!this.filters.Product || item.compDescription.toLowerCase().includes(this.filters.Product.toLowerCase())) &&
               (!this.filters.UnitType || item.unitType.toLowerCase().includes(this.filters.UnitType.toLowerCase())) &&
               (!this.filters.PackSize || item.packSize.toString().includes(this.filters.PackSize)) &&
               (!this.filters.Price || item.activePrice.toString().includes(this.filters.Price)) &&
               (!this.filters.WOH || (item.woh && item.woh.toString().includes(this.filters.WOH)));
    });
  }
}
