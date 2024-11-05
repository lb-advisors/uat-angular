import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

interface ProductDetails {
  compItemId: number;
  compDescription: string;
  origin: string;
  notes?: string;
  woh?: number;
  unitType?: string;
  packSize?: string;
  packLock?: number;
  compCost?: number;
  yield?: number;
  laborPackCost?: number;
  buyer?: string;
  compInstructions?: string;
  sixtySales?: number;
  tenSales?: number;
  preOrderHours?: number;
}

@Component({
  standalone: true,
  selector: 'app-product-details-dialog',
  templateUrl: './product-details-dialog.component.html',
  styleUrls: ['./product-details-dialog.component.css'],
  imports: [CommonModule],
})
export class ProductDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ProductDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductDetails // Ensure this is `ProductDetails` directly
  ) {
    console.log('Product Details Data:', this.data); // Debugging log to verify fields
  }

  close(): void {
    this.dialogRef.close();
  }
}
