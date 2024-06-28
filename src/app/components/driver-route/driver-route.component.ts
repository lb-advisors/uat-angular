import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DriverRouteService } from '../../services/driver-route.service';
import { DeliveryRoute } from '../../models/delivery-route.model';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
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
  selectedDriver: string = '';
  deliveryDate: string = new Date().toISOString().split('T')[0]; // Default to today's date in YYYY-MM-DD format
  errorMessage: string = '';

  constructor(
    private driverRouteService: DriverRouteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.isProduction = environment.production;
  }

  ngOnInit() {
    console.log('ngOnInit');

    // Subscribe to route parameters
    this.route.queryParams.subscribe(params => {
      this.selectedDriver = params['driverName'] || '';
      this.deliveryDate = params['deliveryDate'] || new Date().toISOString().split('T')[0];
      this.loadDeliveryRoutes();
    });
  }

  loadDeliveryRoutes() {
    const driver = this.selectedDriver;
    const date = this.formatDate(this.deliveryDate);

    if (driver) {
      console.log(`Fetching routes for driver: ${driver} on date: ${date}`);
      this.driverRouteService.getRoutes(driver, date).subscribe(
        (routes: DeliveryRoute[]) => {
          console.log('Fetched routes:', routes);
          this.dataSource.data = routes;
          this.errorMessage = '';  // Clear error message if successful
        },
        (error) => {
          console.error('Error fetching routes:', error);
          this.errorMessage = 'Error fetching data, please try again later';
        }
      );
    }
  }

  applyFilter() {
    this.router.navigate(['/driver'], {
      queryParams: {
        driverName: this.selectedDriver,
        deliveryDate: this.deliveryDate
      }
    });
  }

  formatDate(date: string): string {
    // Ensure the date is in YYYY-MM-DD format
    return new Date(date).toISOString().split('T')[0];
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
        this.errorMessage = 'Error updating route, please try again later';
      });
  }

  filterRoutes() {
    this.loadDeliveryRoutes();
  }
}
