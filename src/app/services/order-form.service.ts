import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderRequest } from '../models/order-request.model';
import { OrderConfirmation } from '../models/order-confirmation.model';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class OrderFormService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getOrderData(customerId: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/public/customers/${customerId}/profiles`);
  }

  placeOrder(customerId: number, order: OrderRequest): Observable<OrderConfirmation> {
    const url = `${this.apiUrl}/public/customers/${customerId}/orders`;
    return this.http.post<OrderConfirmation>(url, order);
  }
}
