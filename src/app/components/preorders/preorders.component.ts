import { Component } from '@angular/core';
import { PreOrders } from '../../models/preorders.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  standalone: true,
  selector: 'app-preorders',
  templateUrl: './preorders.component.html',
  styleUrls: ['./preorders.component.css'],
  imports: [FormsModule, CommonModule, RouterModule], // Include RouterModule here
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
      price: 2.5,
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
      price: 4.83,
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
      price: 1.8,
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
      price: 2.0,
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
      price: 3.5,
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
      price: 1.64,
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
      price: 1.73,
    },
  ];

  // Properties for filtering and validation
  filteredPreOrders: PreOrders[] = [];
  uniqueVendors: string[] = [];
  selectedVendor: string = '';
  weights: number[] = Array(this.preOrders.length).fill(null);
  weightErrors: string[] = [];
  priceErrors: string[] = [];

  constructor(private snackBar: MatSnackBar) {
    this.filteredPreOrders = [...this.preOrders];
    this.getUniqueVendors();
  }

  getUniqueVendors() {
    this.uniqueVendors = [...new Set(this.preOrders.map((order) => order.vendorName))];
  }

  filterByVendor() {
    this.filteredPreOrders = this.selectedVendor ? this.preOrders.filter((order) => order.vendorName === this.selectedVendor) : [...this.preOrders];
  }

  validateWeight(index: number) {
    const weight = this.weights[index];
    this.weightErrors[index] = !weight ? 'Please enter a weight.' : isNaN(weight) ? 'Weight must be a valid number.' : '';
  }

  validatePrice(index: number) {
    const price = this.preOrders[index].price;
    this.priceErrors[index] = !price || price <= 0 ? 'Price must be a valid positive number.' : '';
  }

  submitWeights() {
    let hasError = false;
    this.weights.forEach((_, index) => {
      this.validateWeight(index);
      this.validatePrice(index);
      if (this.weightErrors[index] || this.priceErrors[index]) {
        hasError = true;
      }
    });

    if (hasError) {
      this.snackBar.open('Please fix the errors before submitting.', 'Close', { duration: 3000 });
    } else {
      this.snackBar.open('PreOrder saved!', 'Close', { duration: 3000 });
    }
  }

  getUnitTypeLabel(unitType: number): string {
    return ['Unknown', 'Cs', 'Pcs', 'Pck', 'Lbs', 'Side'][unitType] || 'Unknown';
  }
}
