import { Component } from '@angular/core';
import { PreOrders } from '../../models/preorders.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  standalone: true,
  selector: 'app-preorders',
  templateUrl: './preorders.component.html',
  styleUrls: ['./preorders.component.css'],
  imports: [FormsModule, CommonModule]
})
export class PreOrdersComponent {
  preOrders: PreOrders[] = [
    {
      dispatchDate: '11/5/2024 0:00',
      customerId: 5132,
      customerName: 'THE GRILL - BEVERLY HILLS',
      sodId: 2228470,
      descriptionMemo: 'CHICKEN SINGLE BREAST SKIN-LESS BONELESS FRESH 24ea 5oz',
      entryTime: '11/4/2024 10:21',
      preOrderHours: 15,
      orderedUnits: 4,
      unitType: 1,
      unitSize: 7.5,
      webAppPreOrderQ_VendorID: 1687,
      vendor_VendorID: 1687,
      vendorName: 'COMMODITY FOOD SALES',
      price: 2.5 // placeholder for price as it was not provided in original data
    },
    {
      dispatchDate: '11/6/2024 0:00',
      customerId: 5113,
      customerName: 'SEVEN LAKES COUNTRY CLUB - DESERT',
      sodId: 2229987,
      descriptionMemo: 'CHICKEN SINGLE BREAST SKIN-LESS BONELESS FRESH 24ea 8oz',
      entryTime: '11/5/2024 12:51',
      preOrderHours: 15,
      orderedUnits: 5,
      unitType: 1,
      unitSize: 12,
      webAppPreOrderQ_VendorID: 1687,
      vendor_VendorID: 1687,
      vendorName: 'COMMODITY FOOD SALES',
      price: 4.83
    },
    {
      dispatchDate: '11/6/2024 0:00',
      customerId: 859,
      customerName: 'SI BON',
      sodId: 2228782,
      descriptionMemo: 'CHICKEN THIGH MEAT SKIN-LESS BONELESS FRESH 40LB',
      entryTime: '11/4/2024 17:06',
      preOrderHours: 15,
      orderedUnits: 2,
      unitType: 1,
      unitSize: 40,
      webAppPreOrderQ_VendorID: 1687,
      vendor_VendorID: 1687,
      vendorName: 'COMMODITY FOOD SALES',
      price: 1.80
    },
    {
      dispatchDate: '11/6/2024 0:00',
      customerId: 5256,
      customerName: 'THE HIVE - MAR VISTA',
      sodId: 2229828,
      descriptionMemo: 'CHICKEN THIGH MEAT SKIN-LESS BONELESS FRESH 40LB',
      entryTime: '11/5/2024 10:47',
      preOrderHours: 15,
      orderedUnits: 1,
      unitType: 1,
      unitSize: 40,
      webAppPreOrderQ_VendorID: 1687,
      vendor_VendorID: 1687,
      vendorName: 'COMMODITY FOOD SALES',
      price: 2.00
    },
    {
      dispatchDate: '11/6/2024 0:00',
      customerId: 5319,
      customerName: 'THE HIVE - MANHATTAN BEACH',
      sodId: 2229838,
      descriptionMemo: 'CHICKEN THIGH MEAT SKIN-LESS BONELESS FRESH 40LB',
      entryTime: '11/5/2024 10:49',
      preOrderHours: 15,
      orderedUnits: 1,
      unitType: 1,
      unitSize: 40,
      webAppPreOrderQ_VendorID: 1687,
      vendor_VendorID: 1687,
      vendorName: 'COMMODITY FOOD SALES',
      price: 3.50
    },
    {
      dispatchDate: '11/6/2024 0:00',
      customerId: 5113,
      customerName: 'SEVEN LAKES COUNTRY CLUB - DESERT',
      sodId: 2229988,
      descriptionMemo: 'CHICKEN WHOLE WHITE FRESH 3up (WOGS) SPLIT 22pcs',
      entryTime: '11/5/2024 12:54',
      preOrderHours: 15,
      orderedUnits: 1,
      unitType: 1,
      unitSize: 75,
      webAppPreOrderQ_VendorID: 1687,
      vendor_VendorID: 1687,
      vendorName: 'COMMODITY FOOD SALES',
      price: 1.64
    },
    {
      dispatchDate: '11/6/2024 0:00',
      customerId: 859,
      customerName: 'SI BON',
      sodId: 2228783,
      descriptionMemo: 'CHICKEN WHOLE WHITE FRESH 2.5 (WOGS) 28pcs',
      entryTime: '11/4/2024 17:06',
      preOrderHours: 15,
      orderedUnits: 1,
      unitType: 1,
      unitSize: 75,
      webAppPreOrderQ_VendorID: 1687,
      vendor_VendorID: 1687,
      vendorName: 'COMMODITY FOOD SALES',
      price: 1.73
    }
  ];


 // New properties for filtering
 filteredPreOrders: PreOrders[] = [];
 uniqueVendors: string[] = [];
 selectedVendor: string = '';
 weights: number[] = Array(this.preOrders.length).fill(null);
 weightErrors: string[] = [];
 priceErrors: string[] = [];

 constructor(private snackBar: MatSnackBar) {
   this.filteredPreOrders = [...this.preOrders]; // Initialize with all pre-orders
   this.getUniqueVendors(); // Populate unique vendor names
 }

 getUniqueVendors() {
   this.uniqueVendors = [...new Set(this.preOrders.map(order => order.vendorName))];
 }

 filterByVendor() {
   if (this.selectedVendor) {
     this.filteredPreOrders = this.preOrders.filter(order => order.vendorName === this.selectedVendor);
   } else {
     this.filteredPreOrders = [...this.preOrders];
   }
 }

 validateWeight(index: number) {
   const weight = this.weights[index];
   if (weight === null || weight === undefined) {
     this.weightErrors[index] = 'Please enter a weight.';
   } else if (isNaN(weight)) {
     this.weightErrors[index] = 'Weight must be a valid number.';
   } else {
     this.weightErrors[index] = '';
   }
 }

 validatePrice(index: number) {
   const price = this.preOrders[index].price;
   if (price === null || price === undefined) {
     this.priceErrors[index] = 'Please enter a price.';
   } else if (isNaN(price) || price <= 0) {
     this.priceErrors[index] = 'Price must be a valid positive number.';
   } else {
     this.priceErrors[index] = '';
   }
 }

 submitWeights() {
   let hasError = false;
   let errorMessage = '';

   this.weights.forEach((weight, index) => {
     this.validateWeight(index);
     if (this.weightErrors[index]) {
       errorMessage = this.weightErrors[index];
       hasError = true;
     }
   });

   this.preOrders.forEach((order, index) => {
     this.validatePrice(index);
     if (this.priceErrors[index]) {
       errorMessage = this.priceErrors[index];
       hasError = true;
     }
   });

   if (hasError) {
     this.snackBar.open(errorMessage, 'Close', { duration: 3000 });
     return;
   }

   // Update preOrders with current weights and ensure prices remain
   this.preOrders.forEach((order, index) => {
     order.weight = this.weights[index]; // Update with entered weight
     if (order.price === null || order.price === undefined) {
       order.price = order.price; // Retain price if already set
     }
   });

   this.snackBar.open('PreOrder saved!', 'Close', { duration: 3000 });
   console.log('Saved PreOrders:', this.preOrders);
 }

 formatPrice(price: number | undefined): string {
  const validPrice = price ?? 0; // Use 0 if price is undefined
  return `$${validPrice.toFixed(2)}`;
}


 getUnitTypeLabel(unitType: number): string {
   switch (unitType) {
     case 1: return 'Cs';
     case 2: return 'Pcs';
     case 3: return 'Pck';
     case 4: return 'Lbs';
     case 5: return 'Side';
     default: return 'Unknown';
   }
 }
}