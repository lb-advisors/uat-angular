import { Component } from '@angular/core';
import { DeliveryRoute } from '../../models/delivery-route';

@Component({
  selector: 'app-driver-route',
  templateUrl: './driver-route.component.html',
  styleUrls: ['./driver-route.component.css'],
})
export class DriverRouteComponent {
  displayedColumns: string[] = [
    'driver_name',
    'customer_name',
    'address',
    'delivery_date',
    'has_arrived',
    'status',
    'delivery_time',
    'photo',
  ];
  deliveryRoutes: DeliveryRoute[] = [
    {
      driver_name: 'Douglas  Pace',
      customer_name: 'Customer A',
      address: '123 Eml Street',
      delivery_date: null,
      has_arrived: false,
      status: 'Not arrived ',
      delivery_time: null,
    },
    {
      driver_name: 'Douglas  Pace',
      customer_name: 'Customer A',
      address: '123 Eml Street',
      delivery_date: new Date('2024-06-17'),
      has_arrived: true,
      status: 'Not arrived ',
      delivery_time: new Date('2024-06-17 13:20:30'),
    },
  ];

  hasArrived(rowNum: number) {
    if (this.deliveryRoutes[rowNum].has_arrived) {
      this.deliveryRoutes[rowNum].has_arrived = false;
      this.deliveryRoutes[rowNum].status = 'Not arrived';
      this.deliveryRoutes[rowNum].delivery_date = null;
      this.deliveryRoutes[rowNum].delivery_time = null;
    } else {
      this.deliveryRoutes[rowNum].has_arrived = true;
      this.deliveryRoutes[rowNum].status = 'Arrived';
      this.deliveryRoutes[rowNum].delivery_date = new Date();
      this.deliveryRoutes[rowNum].delivery_time = new Date();
    }
  }
}
