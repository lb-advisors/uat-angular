import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeliveryStop } from '../models/delivery-stop.model';
import { environment } from 'src/environments/environment';

interface Driver {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class DriverRouteService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${this.apiUrl}/drivers`);
  }

  getDeliveryRoute(
    driverName: string,
    deliveryDate: string,
  ): Observable<DeliveryStop[]> {
    const params = new HttpParams()
      .set('driverName', driverName)
      .set('deliveryDate', deliveryDate);
    return this.http.get<DeliveryStop[]>(`${this.apiUrl}/delivery-stops`, {
      params,
    });
  }

  hasArrived(id: string): Observable<DeliveryStop> {
    return this.http
      .patch<DeliveryStop>(`${this.apiUrl}/delivery-stops/${id}`, {})
      .pipe
      // catchError((error) => {
      //console.error('Error marking delivery as arrived:', error);
      //return throwError(
      //  () => new Error('Error marking delivery as arrived'),
      //);
      //}),
      ();
  }
}
