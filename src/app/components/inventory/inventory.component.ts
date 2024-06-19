import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  filters = {
    CompItemID: '',
    Product: '',
    UnitType: '',
    PackSize: '',
    Price: '',
    Quantity: ''
  };

  inventoryItems = [
    { CompItemID: 1, Product: 'Salmon', UnitType: 'Lbs', PackSize: 5, Price: 10.00, Quantity: 100 },
    { CompItemID: 2, Product: 'Tuna', UnitType: 'Lbs', PackSize: 2, Price: 15.00, Quantity: 150 },
    { CompItemID: 3, Product: 'Trout', UnitType: 'Pcs', PackSize: 1, Price: 8.00, Quantity: 200 },
    { CompItemID: 4, Product: 'Mackerel', UnitType: 'Cs', PackSize: 15, Price: 12.00, Quantity: 50 },
    { CompItemID: 5, Product: 'Sardine', UnitType: 'Lbs', PackSize: 2, Price: 5.00, Quantity: 300 },
    { CompItemID: 6, Product: 'Cod', UnitType: 'Pcs', PackSize: 1, Price: 7.00, Quantity: 250 },
    { CompItemID: 7, Product: 'Herring', UnitType: 'Cs', PackSize: 5, Price: 6.00, Quantity: 180 },
    { CompItemID: 8, Product: 'Bass', UnitType: 'Lbs', PackSize: 2, Price: 11.00, Quantity: 130 },
    { CompItemID: 9, Product: 'Halibut', UnitType: 'Pcs', PackSize: 1, Price: 14.00, Quantity: 90 },
    { CompItemID: 10, Product: 'Snapper', UnitType: 'Cs', PackSize: 15, Price: 13.00, Quantity: 70 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  filteredInventoryItems() {
    return this.inventoryItems.filter(item => {
      return (!this.filters.CompItemID || item.CompItemID.toString().includes(this.filters.CompItemID)) &&
             (!this.filters.Product || item.Product.toLowerCase().includes(this.filters.Product.toLowerCase())) &&
             (!this.filters.UnitType || item.UnitType.toLowerCase().includes(this.filters.UnitType.toLowerCase())) &&
             (!this.filters.PackSize || item.PackSize.toString().includes(this.filters.PackSize)) &&
             (!this.filters.Price || item.Price.toString().includes(this.filters.Price)) &&
             (!this.filters.Quantity || item.Quantity.toString().includes(this.filters.Quantity));
    });
  }
}
