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
  imports: [CommonModule, RouterModule],
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
            console.log('[PreOrders with Weight]', this.preOrders);
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
}
