import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DeliveryRoute } from '../../models/delivery-route';
import { DriverRouteService } from 'src/app/services/driver-route.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-driver-route',
  templateUrl: './driver-route.component.html',
  styleUrls: ['./driver-route.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DriverRouteComponent {
  $deliveryRoutes: Observable<DeliveryRoute[]>;

  isProduction: boolean;

  constructor(private driverRouteService: DriverRouteService) {
    console.log('constructor');

    this.$deliveryRoutes = driverRouteService.getRoutes();

    this.isProduction = environment.production;
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

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

  hasArrived(deliveryRoutes: DeliveryRoute) {
    // TODO: write back to database
    if (deliveryRoutes.has_arrived) {
      deliveryRoutes.has_arrived = false;
      deliveryRoutes.status = 'Not arrived';
      deliveryRoutes.delivery_date = null;
      deliveryRoutes.delivery_time = null;
    } else {
      deliveryRoutes.has_arrived = true;
      deliveryRoutes.status = 'Arrived';
      deliveryRoutes.delivery_date = new Date();
      deliveryRoutes.delivery_time = new Date();
    }
  }
}
