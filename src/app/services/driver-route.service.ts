import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeliveryRoute } from '../models/delivery-route';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DriverRouteService {
  constructor(private http: HttpClient) {}

  getRoutes(): Observable<DeliveryRoute[]> {
    const deliveryRoutes = [
      {
        driver_name: 'Douglas  Pace',
        customer_name: 'Customer A1',
        address: '123 Eml Street',
        delivery_date: null,
        has_arrived: true,
        status: 'Arrived ',
        delivery_time: null,
      },
      {
        driver_name: 'Douglas  Pace',
        customer_name: 'Customer B2',
        address: '877 Main Street, LA',
        delivery_date: new Date('2024-06-17'),
        has_arrived: false,
        status: 'Not arrived ',
        delivery_time: new Date('2024-06-17 13:20:30'),
      },
      {
        driver_name: 'Douglas Pace',
        customer_name: 'Customer C3',
        address: '34 South Garden Blvd, San Francisco',
        delivery_date: new Date('2024-06-17'),
        has_arrived: false,
        status: 'Not arrived ',
        delivery_time: new Date('2024-06-17 13:20:30'),
      },
    ];

    //return this.http.get<DeliveryRoute[]>('http://abc.com/dfdf/');
    //  .get<DeliveryRoute>(this.baseurl + '/bugtracking/')
    //  .pipe(retry(1), catchError(this.errorHandl));
    return of(deliveryRoutes);
  }
}
