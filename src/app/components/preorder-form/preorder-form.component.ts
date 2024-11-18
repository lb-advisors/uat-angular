import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

interface PreOrder {
  id: number;
  dispatchDate: string;
  customerName: string;
  descriptionMemo: string;
  price: number;
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
  imports: [CommonModule, RouterModule],
  selector: 'app-preorder-form',
  template: `
    <div class="container">
      <!-- Header Section -->
      <div class="header-section">
        <a [routerLink]="['/home']" class="image-container">
          <img src="assets/logo.png" alt="Company Logo" (error)="handleImageError($event)">
        </a>
      </div>

      <!-- Loading Indicator -->
      <div *ngIf="loading" class="loading">
        <div class="spinner"></div>
        <div>Loading preorders...</div>
      </div>

      <!-- PreOrders Table -->
      <div *ngIf="!loading && preOrders.length > 0" class="table-container">
        <p>Found {{preOrders.length}} preorders</p>
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Dispatch Date</th>
              <th>Customer</th>
              <th>Description</th>
              <th>Units</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let order of preOrders; trackBy: trackByOrderId">
              <td>{{ order.id }}</td>
              <td>{{ order.dispatchDate | date:'MMM d, y' }}</td>
              <td>{{ order.customerName }}</td>
              <td>{{ order.descriptionMemo }}</td>
              <td>{{ order.orderedUnits }} x {{ order.unitSize }}{{ order.unitType }}</td>
              <td class="text-right">{{ order.price | currency }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- No Data Message -->
      <div *ngIf="!loading && preOrders.length === 0" class="alert alert-info">
        No preorders available.
      </div>

      <!-- Error Message -->
      <div *ngIf="errorMessage" class="alert alert-danger">
        {{ errorMessage }}
      </div>
    </div>
  `,
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
  ) {
    console.log('[Constructor] PreOrder Component created');
  }

  ngOnInit(): void {
    console.log('[ngOnInit] Component initialization started');
    this.subscription.add(
      this.route.params.subscribe({
        next: (params) => {
          console.log('[Route Params]', params);
          this.vendorId = +params['vendorId'];
          console.log('[Vendor ID] Parsed:', this.vendorId, 'Original:', params['vendorId']);
          
          if (this.vendorId) {
            this.fetchPreOrders();
          } else {
            console.error('[Error] Invalid Vendor ID:', params['vendorId']);
            this.errorMessage = 'Invalid Vendor ID';
            this.loading = false;
            this.cdr.detectChanges();
          }
        },
        error: (err) => {
          console.error('[Route Error]', err);
          this.errorMessage = 'Error loading vendor information';
          this.loading = false;
          this.cdr.detectChanges();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('[Destroy] Component cleanup completed');
  }

  fetchPreOrders(): void {
    console.log('[Fetch] Starting to fetch preorders');
    this.loading = true;
    this.errorMessage = '';
    this.cdr.detectChanges();
    
    const apiUrl = `https://uat-pffc.onrender.com/api/public/vendor/${this.vendorId}/pre_orders`;
    console.log('[API] Calling:', apiUrl);
    
    this.subscription.add(
      this.http.get<PreOrder[]>(apiUrl).subscribe({
        next: (data) => {
          console.log('[API Response] Raw data:', data);
          console.log('[Data Length]:', data.length);
          
          if (Array.isArray(data)) {
            this.preOrders = [...data];
            console.log('[PreOrders] Assigned', this.preOrders.length, 'orders');
            
            if (data.length > 0) {
              this.vendorName = data[0].vendorName;
              console.log('[Vendor Name] Set to:', this.vendorName);
            }
          } else {
            console.error('[Data Error] Response is not an array:', data);
            this.errorMessage = 'Invalid data format received';
          }
          
          this.loading = false;
          console.log('[State] Loading:', this.loading, 'Orders:', this.preOrders.length);
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('[API Error] Details:', err);
          this.errorMessage = 'Failed to load preorders. Please try again later.';
          this.loading = false;
          this.preOrders = [];
          console.log('[State] Error state - Loading:', this.loading);
          this.cdr.detectChanges();
        }
      })
    );
  }

  handleImageError(event: any): void {
    console.error('[Image Error] Failed to load logo');
    event.target.style.display = 'none';
  }

  trackByOrderId(index: number, order: PreOrder): number {
    return order.id;
  }
}