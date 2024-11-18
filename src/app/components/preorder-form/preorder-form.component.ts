import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms'; // Import FormsModule

interface PreOrder {
  id: number;
  dispatchDate: string;
  customerName: string;
  descriptionMemo: string;
  price: number;
  weight: number;
  vendorName: string;
  customerId: number;
  sodId: number;
  entryTime: string;
  preOrdersHour: number;
  orderedUnits: number;
  unitType: string;
  unitSize: number;
  webAppPreOrderQVendorId: number;
  vendorId: number;
}

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], // Include FormsModule
  selector: 'app-preorder-form',
  templateUrl: './preorder-form.component.html',
  styleUrls: ['./preorder-form.component.css']
})
export class PreorderFormComponent implements OnInit, OnDestroy {
  vendorId!: number;
  vendorName: string = '';
  preOrders: PreOrder[] = [];
  errorMessage: string = '';
  loading: boolean = true;
  private subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.route.params.subscribe((params) => {
        this.vendorId = +params['vendorId'];
        console.log('Vendor ID:', this.vendorId); // Debug Vendor ID
        if (this.vendorId) {
          this.fetchPreOrders();
        } else {
          this.errorMessage = 'Invalid Vendor ID';
          this.loading = false;
          this.cdr.detectChanges();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  fetchPreOrders(): void {
    const apiUrl = `https://uat-pffc.onrender.com/api/public/vendor/${this.vendorId}/pre_orders`;
    console.log('Fetching PreOrders from:', apiUrl);
    this.subscription.add(
      this.http.get<PreOrder[]>(apiUrl).subscribe({
        next: (data) => {
          console.log('PreOrders fetched:', data);
          this.preOrders = data;
          this.sortByIdAsc(); // Sort the preOrders by ID in ascending order
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error fetching PreOrders:', err);
          this.errorMessage = 'Failed to fetch preorders. Please try again.';
          this.loading = false;
          this.cdr.detectChanges();
        },
      })
    );
  }
  

  updatePreOrder(order: PreOrder): void {
    const patchUrl = `https://uat-pffc.onrender.com/api/vendor/${this.vendorId}/pre_orders/${order.sodId}`;
    const body = {
      weight: order.weight,
      price: order.price,
    };

    console.log('Updating Order:', { patchUrl, body }); // Debug API Call Details

    this.http.patch(patchUrl, body).subscribe({
      next: (response) => {
        console.log('Update successful for Order:', order.id, response);
        alert(`Order ${order.id} updated successfully!`);
      },
      error: (error) => {
        console.error('Update failed for Order:', order.id, error);
        alert(`Failed to update Order ${order.id}. Please try again.`);
      },
    });
  }

  submitAll(): void {
    const requests = this.preOrders.map((order) => {
      const patchUrl = `https://uat-pffc.onrender.com/api/vendor/${this.vendorId}/pre_orders/${order.sodId}`;
      const body = {
        weight: order.weight,
        price: order.price,
      };

      console.log('Submitting PATCH Request:', { patchUrl, body }); // Debug Individual Requests

      return this.http.patch(patchUrl, body).toPromise();
    });

    // Execute all PATCH requests
    Promise.all(requests)
      .then((responses) => {
        console.log('All updates successful:', responses); // Debug Success Responses
        alert('All changes saved successfully!');
      })
      .catch((error) => {
        console.error('One or more updates failed:', error); // Debug Errors
        alert('Failed to save some changes. Please try again.');
      });
  }

  trackByOrderId(index: number, order: PreOrder): number {
    return order.id;
  }

  getUnitType(unitType: string): string {
    const unitTypeMap: { [key: string]: string } = {
      "1": "Case",
      "2": "Piece",
      "3": "Pack",
      "4": "Pound",
      "5": "Side"
    };
    return unitTypeMap[unitType] || "Unknown";
  }

  hasErrors(): boolean {
    return this.preOrders.some(order => order.weight <= 0 || order.price <= 0);
  }

  sortByIdAsc(): void {
    this.preOrders.sort((a, b) => a.id - b.id);
  }
}
