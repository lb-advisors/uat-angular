import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  Subject,
  catchError,
  map,
  switchMap,
  throwError,
} from 'rxjs';
import { DeliveryStop } from '../models/delivery-stop.model';
import { environment } from 'src/environments/environment';

interface SearchParams {
  driverName: string;
  deliveryDate: string;
}

@Injectable({
  providedIn: 'root',
})
export class DriverRouteService {
  private apiUrl = environment.apiUrl;
  private urlSubject = new Subject<SearchParams>();

  constructor(private http: HttpClient) {}

  getDeliveryRoute(): Observable<DeliveryStop[]> {
    return this.urlSubject.asObservable().pipe(
      switchMap((searchParams: SearchParams) => {
        const params = new HttpParams()
          .set('driverName', searchParams.driverName)
          .set('deliveryDate', searchParams.deliveryDate);
        return this.http
          .get<DeliveryStop[]>(`${this.apiUrl}/delivery-stops`, {
            params,
          })
          .pipe(
            map((deliveryStops) => {
              return this.calculateTimeDifferences(deliveryStops);
            }),
            // errors needs to be catched otherwise the obervable will be unsubscribed
            catchError(() => {
              return throwError(() => {
                new Error('Error fetching delivery stops');
              });
            }),
          );
      }),
    );
  }

  // calculate plannedTravelTime
  private calculateTimeDifferences(
    deliveryStops: DeliveryStop[],
  ): DeliveryStop[] {
    return deliveryStops.map((row, index) => {
      if (index === 0) {
        return { ...row };
      } else {
        const endDate = new Date(row.plannedArrivalTime);
        const startDate = new Date(deliveryStops[index - 1].plannedArrivalTime);

        // Calculate the difference in milliseconds
        const differenceInMilliseconds =
          endDate.getTime() - startDate.getTime();

        // Convert milliseconds to hours and minutes
        const differenceInMinutes = Math.floor(
          differenceInMilliseconds / 1000 / 60,
        );
        const hours = Math.floor(differenceInMinutes / 60);
        const minutes = (differenceInMinutes % 60).toString().padStart(2, '0');
        row.plannedTravelTime = hours + ':' + minutes;

        return {
          ...row,
        };
      }
    });
  }

  refreshDeliverRoute(driverName: string, deliveryDate: string) {
    this.urlSubject.next({
      driverName: driverName,
      deliveryDate: deliveryDate,
    });
  }

  hasArrived(id: string): Observable<DeliveryStop> {
    return this.http.patch<DeliveryStop>(
      `${this.apiUrl}/delivery-stops/${id}`,
      {},
    );
  }
}
