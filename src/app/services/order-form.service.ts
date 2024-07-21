import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderRequest } from '../models/order-request.model';
import { OrderConfirmation } from '../models/order-confirmation.model';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderFormService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getOrderData(customerId: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/customers/${customerId}/profiles`);
  }

  placeOrder(customerId: number, orderData: OrderRequest): Observable<OrderConfirmation> {
    return this.http.post<OrderConfirmation>(`${this.apiUrl}/customers/${customerId}/orders`, orderData);
  }
}
