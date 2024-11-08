import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getOrderData(customerId: number): Observable<Order> {
    return this.http.get<Order>(
      `${this.apiUrl}/customers/${customerId}/profiles`,
      { headers: this.getHeaders() }
    );
  }

  placeOrder(customerId: number, orderData: OrderRequest): Observable<OrderConfirmation> {
    return this.http.post<OrderConfirmation>(
      `${this.apiUrl}/customers/${customerId}/orders`, 
      orderData,
      { headers: this.getHeaders() }
    );
  }
}