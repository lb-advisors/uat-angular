import { HttpClient, HttpEvent, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeliveryStop } from '../models/delivery-stop.model';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

interface Driver {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class DriverRouteService {
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

  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${this.apiUrl}/drivers`, {
      headers: this.getHeaders()
    });
  }

  getDeliveryRoute(
    driverName: string,
    deliveryDate: string
  ): Observable<DeliveryStop[]> {
    const params = new HttpParams()
      .set('driverName', driverName)
      .set('deliveryDate', deliveryDate);

    return this.http.get<DeliveryStop[]>(`${this.apiUrl}/delivery-stops`, {
      params,
      headers: this.getHeaders()
    });
  }

  hasArrived(id: string): Observable<DeliveryStop> {
    return this.http.patch<DeliveryStop>(
      `${this.apiUrl}/delivery-stops/${id}`, 
      {},
      { headers: this.getHeaders() }
    );
  }

  uploadPhoto(
    deliveryStopId: number,
    file: File
  ): Observable<HttpEvent<DeliveryStop>> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<DeliveryStop>(
      `${this.apiUrl}/delivery-stops/${deliveryStopId}/photos`,
      formData,
      {
        headers: this.getHeaders(),
        reportProgress: true,
        observe: 'events',
      }
    );
  }
}