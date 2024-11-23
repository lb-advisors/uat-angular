import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Order } from 'src/app/models/order.model';

@Component({
  standalone: true,
  selector: 'app-order-details-dialog',
  templateUrl: './order-details-dialog.component.html',
  styleUrls: ['./order-details-dialog.component.css'],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
})
export class OrderDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public order: Order, private dialogRef: MatDialogRef<OrderDetailsDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
