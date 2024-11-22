import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PreOrder } from '../models/preorder.model';

@Injectable({
  providedIn: 'root',
})
export class PreorderService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPreOrders(vendorId: string): Observable<PreOrder[]> {
    return this.http.get<PreOrder[]>(`${this.apiUrl}/public/vendors/${vendorId}/pre-orders`);
  }

  updatePreOrderWeightAndPrice(vendorId: string, preOrder: PreOrder): Observable<unknown> {
    const patchUrl = `${this.apiUrl}/vendors/${vendorId}/pre-orders/${preOrder.sodId}`;
    const body = {
      weight: preOrder.weight,
      price: preOrder.price,
    };
    return this.http.patch(patchUrl, body);
  }
}
