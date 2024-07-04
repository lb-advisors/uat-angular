import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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
  private driversSubject = new BehaviorSubject<string[]>([]);
  private deliveryStopsSubject = new BehaviorSubject<DeliveryStop[]>([]);

  constructor(private http: HttpClient) {}

  getDrivers(): Observable<string[]> {
    return this.driversSubject.asObservable();
  }

  refreshDrivers(): void {
    this.http.get<Driver[]>(`${this.apiUrl}/drivers`).pipe(
      map((drivers) => drivers.map(driver => driver.name)),
      catchError((error) => {
        console.error('Error fetching drivers:', error);
        return throwError(() => new Error('Error fetching drivers'));
      })
    ).subscribe((driverNames) => {
      this.driversSubject.next(driverNames);
    });
  }

  getDeliveryRoute(driverName: string, deliveryDate: string): Observable<DeliveryStop[]> {
    const params = new HttpParams()
      .set('driverName', driverName)
      .set('deliveryDate', deliveryDate);
    return this.http.get<DeliveryStop[]>(`${this.apiUrl}/delivery-stops`, { params }).pipe(
      catchError((error) => {
        console.error('Error fetching delivery stops:', error);
        return throwError(() => new Error('Error fetching delivery stops'));
      })
    );
  }

  hasArrived(id: string): Observable<DeliveryStop> {
    return this.http.patch<DeliveryStop>(`${this.apiUrl}/delivery-stops/${id}`, {}).pipe(
      catchError((error) => {
        console.error('Error marking delivery as arrived:', error);
        return throwError(() => new Error('Error marking delivery as arrived'));
      })
    );
  }
}
