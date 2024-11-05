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
      price: 0 // placeholder for price as it was not provided in original data
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
      price: 2.00
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
      price: 2.00
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


  weights: number[] = Array(this.preOrders.length).fill(null);
  prices: number[] = Array(this.preOrders.length).fill(null);
  weightErrors: string[] = []; // Track errors for weights
  priceErrors: string[] = [];  // Track errors for prices

  constructor(private snackBar: MatSnackBar) {}

  validateWeight(index: number) {
    const weight = this.weights[index];
    if (weight === null || weight === undefined) {
      this.weightErrors[index] = 'Please fill out the weight.';
    } else if (isNaN(weight)) {
      this.weightErrors[index] = 'Weight must be a valid number.';
    } else {
      this.weightErrors[index] = '';
    }
  }

  validatePrice(index: number) {
    const price = this.prices[index];
    if (price === null || price === undefined) {
      this.priceErrors[index] = 'Please fill out the price.';
    } else if (isNaN(price)) {
      this.priceErrors[index] = 'Price must be a valid number.';
    } else {
      this.priceErrors[index] = '';
    }
  }

  submitWeights() {
    let hasError = false;
    let errorMessage = '';

    // Validate all weights and prices before submission
    this.weights.forEach((weight, index) => {
      this.validateWeight(index);
      if (this.weightErrors[index]) {
        errorMessage = this.weightErrors[index];
        hasError = true;
      }
    });

    this.prices.forEach((price, index) => {
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

    // If validation passes, show success message
    this.snackBar.open('PreOrder saved!', 'Close', { duration: 3000 });

    this.preOrders.forEach((order, index) => {
      order['weight'] = this.weights[index];
      order['price'] = this.prices[index];
    });

    console.log('Saved PreOrders:', this.preOrders);
  }

  getUnitTypeLabel(unitType: number): string {
    switch (unitType) {
      case 1:
        return 'Cs';
      case 2:
        return 'Pcs';
      case 3:
        return 'Pck';
      case 4:
        return 'Lbs';
      case 5:
        return 'Side';
      default:
        return 'Unknown';
    }
  }
}
