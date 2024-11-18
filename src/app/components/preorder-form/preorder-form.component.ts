import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  imports: [CommonModule],
  selector: 'app-preorder-form',
  template: `
    <div class="container">
      <!-- Debug Info 
      <div class="debug-info">
        Debug: 
        VendorID: {{vendorId}} | 
        Orders Count: {{preOrders.length}} | 
        Loading: {{loading}} | 
        Has Error: {{!!errorMessage}}
      </div>

      <h2>PreOrders for {{ vendorName || 'Loading...' }}</h2>

       Error Message 
      <div *ngIf="errorMessage" class="alert alert-danger">
        {{ errorMessage }}
      </div>-->

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
    </div>
  `,
  styles: [`
    .container { 
      padding: 20px; 
      max-width: 1200px; 
      margin: 0 auto;
    }
    .debug-info {
      background: #f8f9fa;
      padding: 10px;
      margin-bottom: 10px;
      font-family: monospace;
      border: 1px solid #ddd;
    }
    .table-container {
      overflow-x: auto;
      margin-top: 20px;
    }
    .table { 
      width: 100%;
      border-collapse: collapse;
      min-width: 800px;
    }
    .table th, .table td {
      padding: 12px;
      border: 1px solid #ddd;
      text-align: left;
    }
    .table th {
      background-color: #f8f9fa;
      font-weight: 600;
    }
    .table tbody tr:hover {
      background-color: #f5f5f5;
    }
    .text-right {
      text-align: right;
    }
    .alert { 
      padding: 15px; 
      margin: 20px 0;
      border-radius: 4px; 
    }
    .alert-danger { 
      background-color: #f8d7da; 
      border: 1px solid #f5c6cb; 
      color: #721c24; 
    }
    .alert-info { 
      background-color: #d1ecf1; 
      border: 1px solid #bee5eb; 
      color: #0c5460; 
    }
    .loading {
      text-align: center;
      padding: 40px;
      color: #666;
    }
    .spinner {
      border: 4px solid #f3f3f3;
      border-top: 4px solid #3498db;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
      margin: 0 auto 10px;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `]
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
            this.preOrders = [...data]; // Create new array reference
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
          this.cdr.detectChanges(); // Force change detection
        },
        error: (err) => {
          console.error('[API Error] Details:', err);
          this.errorMessage = 'Failed to load preorders. Please try again later.';
          this.loading = false;
          this.preOrders = [];
          console.log('[State] Error state - Loading:', this.loading);
          this.cdr.detectChanges(); // Force change detection
        }
      })
    );
  }

  trackByOrderId(index: number, order: PreOrder): number {
    return order.id;
  }
}