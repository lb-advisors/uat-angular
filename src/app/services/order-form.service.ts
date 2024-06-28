import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model'; // Ensure you have an Order model defined

@Injectable({
  providedIn: 'root'
})
export class OrderFormService {
  private apiUrl = 'https://your-api-url.com/api'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getCustomerInfo(customerId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/customer/${customerId}`);
  }

  placeOrder(orderData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/order`, orderData);
  }
}
