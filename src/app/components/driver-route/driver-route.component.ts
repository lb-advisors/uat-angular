import { Component, OnInit } from '@angular/core';
import { DriverRouteService } from '../../services/driver-route.service';
import { Observable } from 'rxjs';
import { DeliveryStop } from 'src/app/models/delivery-stop.model';

@Component({
  selector: 'app-driver-route',
  templateUrl: './driver-route.component.html',
  styleUrls: ['./driver-route.component.css'],
})
export class DriverRouteComponent implements OnInit {
  driverNames$: Observable<string[]>;
  deliveryRoute$: Observable<DeliveryStop[]> | undefined;
  todayDate: string;
  displayedColumns: string[] = [
    'deliveryAddress1',
    'deliveryAddress2',
    'deliveryAddress3',
    'customerPhone',
    'plannedArrivalTime',
    'actualArrivalTime',
    'priority',
    'timeDifference'
  ];

  constructor(private driverRouteService: DriverRouteService) {
    const today = new Date();
    this.todayDate = today.toISOString().split('T')[0];
    this.driverNames$ = this.driverRouteService.getDrivers();
  }

  ngOnInit(): void {
    this.driverRouteService.refreshDrivers();
  }

  refreshDeliverRoute(driverName: string, deliveryDate: string): void {
    this.deliveryRoute$ = this.driverRouteService.getDeliveryRoute(driverName, deliveryDate);
  }

  hasArrived(deliveryRoute: DeliveryStop): void {
    this.driverRouteService.hasArrived(deliveryRoute.id.toString()).subscribe(
      () => {
        console.log('Delivery marked as arrived');
      },
      (error) => {
        console.error('Error marking delivery as arrived', error);
      }
    );
  }
}
