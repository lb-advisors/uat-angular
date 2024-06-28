import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeliveryRoute } from '../models/delivery-route.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DriverRouteService {
  private baseUrl = 'https://uat-pffc.onrender.com/api';

  constructor(private http: HttpClient) {}

  getRoutes(driverName: string, deliveryDate: Date): Observable<DeliveryRoute[]> {
    const dateStr = deliveryDate.toISOString().split('T')[0]; // Convert to YYYY-MM-DD format
    let params = new HttpParams()
      .set('driverName', driverName)
      .set('deliveryDate', dateStr);

    return this.http.get<DeliveryRoute[]>(`${this.baseUrl}/delivery-stops`, { params });
  }

  getRouteById(id: string): Observable<DeliveryRoute> {
    return this.http.get<DeliveryRoute>(`${this.baseUrl}/delivery-stops/${id}`);
  }

  updateRoute(id: string, changes: Partial<DeliveryRoute>): Observable<DeliveryRoute> {
    return this.http.patch<DeliveryRoute>(`${this.baseUrl}/delivery-stops/${id}`, changes);
  }
}
