import { Component, OnInit } from '@angular/core';
import { PreOrders } from '../../models/preorders.model'; // Corrected to PreOrders
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PreOrderLinksService } from 'src/app/services/preorder-links.service';

@Component({
  standalone: true,
  selector: 'app-preorders',
  templateUrl: './preorders.component.html',
  styleUrls: ['./preorders.component.css'],
  imports: [FormsModule, CommonModule, RouterModule], // Include RouterModule here
})
export class PreOrdersComponent implements OnInit {
  preOrders: PreOrders[] = [];
  filteredPreOrders: PreOrders[] = [];
  uniqueVendors: string[] = [];
  selectedVendor: string = '';
  weights: number[] = [];
  weightErrors: string[] = [];
  priceErrors: string[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private preorderLinksService: PreOrderLinksService
  ) {}

  ngOnInit(): void {
    // Fetch preorders from the service
    this.preorderLinksService.getVendors().subscribe({
      next: (data) => {
        this.preOrders = data.map((vendor) => ({
          id: 0, // Placeholder if id isn't part of the vendor data
          dispatchDate: '',
          customerId: 0,
          customerName: '',
          sodId: 0,
          descriptionMemo: '',
          entryTime: '',
          preOrdersHour: 0,
          orderedUnits: 0,
          unitType: 0,
          unitSize: 0,
          webAppPreOrderQVendorId: vendor.vendorId,
          vendorId: vendor.vendorId,
          vendorName: vendor.vendorName,
          price: 0,
          createdBy: '',
          createdAt: '',
          lastUpdatedBy: '',
          lastUpdatedAt: '',
        }));
        this.filteredPreOrders = [...this.preOrders];
        this.getUniqueVendors();
      },
      error: (err) => {
        this.snackBar.open('Error loading preorders', 'Close', { duration: 3000 });
        console.error(err);
      },
    });
  }

  getUniqueVendors() {
    this.uniqueVendors = [...new Set(this.preOrders.map((order) => order.vendorName))];
  }

  filterByVendor() {
    this.filteredPreOrders = this.selectedVendor
      ? this.preOrders.filter((order) => order.vendorName === this.selectedVendor)
      : [...this.preOrders];
  }

  validateWeight(index: number) {
    const weight = this.weights[index];
    this.weightErrors[index] = !weight
      ? 'Please enter a weight.'
      : isNaN(weight)
      ? 'Weight must be a valid number.'
      : '';
  }

  validatePrice(index: number) {
    const price = this.filteredPreOrders[index].price;
    this.priceErrors[index] =
      !price || price <= 0 ? 'Price must be a valid positive number.' : '';
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
      this.snackBar.open('Please fix the errors before submitting.', 'Close', {
        duration: 3000,
      });
    } else {
      this.snackBar.open('PreOrders saved!', 'Close', { duration: 3000 });
    }
  }

  getUnitTypeLabel(unitType: number): string {
    return ['Unknown', 'Cs', 'Pcs', 'Pck', 'Lbs', 'Side'][unitType] || 'Unknown';
  }
}
