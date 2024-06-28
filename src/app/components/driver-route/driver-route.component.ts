import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DriverRouteService } from '../../services/driver-route.service';
import { DeliveryRoute } from '../../models/delivery-route.model';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-driver-route',
  templateUrl: './driver-route.component.html',
  styleUrls: ['./driver-route.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DriverRouteComponent implements OnInit {
  dataSource = new MatTableDataSource<DeliveryRoute>();
  isProduction: boolean;
  drivers: string[] = [];
  selectedDriver: string = '';
  deliveryDate: Date = new Date();

  constructor(private driverRouteService: DriverRouteService) {
    this.isProduction = environment.production;
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.loadDeliveryRoutes();
  }

  loadDeliveryRoutes() {
    const driver = this.selectedDriver;
    const date = this.deliveryDate;

    if (driver) {
      const dateStr = date.toISOString().split('T')[0]; // Convert to YYYY-MM-DD format
      console.log(`Fetching routes for driver: ${driver} on date: ${dateStr}`);
      this.driverRouteService.getRoutes(driver, date).subscribe(
        (routes: DeliveryRoute[]) => {
          console.log('Fetched routes:', routes);
          this.dataSource.data = routes;
          this.drivers = [...new Set(routes.map(route => route.driver_name))];
        },
        (error) => {
          console.error('Error fetching routes:', error);
        }
      );
    }
  }

  displayedColumns: string[] = [
    'driver_name',
    'invoice_number',
    'delivery_date',
    'priority',
    'delivery_address_1',
    'customer_phone',
    'planned_arrival_time',
    'actual_arrival_time',
    'comments',
  ];

  hasArrived(deliveryRoute: DeliveryRoute) {
    deliveryRoute.actual_arrival_time = deliveryRoute.actual_arrival_time ? '' : new Date().toISOString();

    // Send a PATCH request to update the actual arrival time on the server
    this.driverRouteService.updateRoute(deliveryRoute.id.toString(), { actual_arrival_time: deliveryRoute.actual_arrival_time })
      .subscribe(updatedRoute => {
        console.log('Route updated:', updatedRoute);
      }, error => {
        console.error('Error updating route:', error);
      });
  }

  filterRoutes() {
    this.loadDeliveryRoutes();
  }
}
