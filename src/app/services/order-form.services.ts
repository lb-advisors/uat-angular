import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class OrderFormService {
  private apiUrl = 'https://localhost:8080/api/customers';

  constructor(private http: HttpClient) {}

  getCustomerInfo(customerId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${customerId}/profiles`);
  }

  placeOrder(orderData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/placeOrder`, orderData);
  }
}
