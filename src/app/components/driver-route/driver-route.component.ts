import { ChangeDetectionStrategy, Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DriverRouteService } from '../../services/driver-route.service';
import { DeliveryRoute } from '../../models/delivery-route.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-driver-route',
  templateUrl: './driver-route.component.html',
  styleUrls: ['./driver-route.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DriverRouteComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<DeliveryRoute>();
  isProduction: boolean;
  selectedDriver: string = '';
  deliveryDate: string = '';
  errorMessage: string = '';

  constructor(private driverRouteService: DriverRouteService) {
    this.isProduction = environment.production;
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterViewInit() {
    if (this.sort) {
      this.dataSource.sort = this.sort;
      this.dataSource.sortingDataAccessor = (item: DeliveryRoute, property: string) => {
        switch (property) {
          case 'priority': return item.priority;
          default: return (item as any)[property];
        }
      };
      this.sort.sort({ id: 'priority', start: 'asc', disableClear: true });
    }
  }

  loadDeliveryRoutes() {
    const driver = this.selectedDriver;
    const date = this.deliveryDate;

    if (driver && date) {
      console.log(`Fetching routes for driver: ${driver} on date: ${date}`);
      this.driverRouteService.getRoutes(driver, date).subscribe(
        (routes: DeliveryRoute[]) => {
          console.log('Fetched routes:', routes);
          this.dataSource.data = routes;
          console.log('DataSource data:', this.dataSource.data);
          this.errorMessage = '';  // Clear error message if successful
          if (this.sort) {
            this.dataSource.sort = this.sort;  // Ensure sorting is applied
          }
        },
        (error) => {
          console.error('Error fetching routes:', error);
          this.errorMessage = 'Error fetching data, please try again later';
        }
      );
    }
  }

  calculateTimeDifference(routes: DeliveryRoute[]): string[] {
    const timeDiffs: string[] = [];
    for (let i = 1; i < routes.length; i++) {
      const prevTime = new Date(routes[i - 1].planned_arrival_time).getTime();
      const currentTime = new Date(routes[i].planned_arrival_time).getTime();
      if (prevTime !== undefined && currentTime !== undefined) {
        const diffMinutes = (currentTime - prevTime) / 60000;
        timeDiffs.push(diffMinutes.toFixed(2) + ' mins');
      } else {
        timeDiffs.push('');
      }
    }
    return timeDiffs;
  }

  displayedColumns: string[] = [
    'id',
    'driverName',
    'deliveryAddress1',
    'deliveryAddress2',
    'deliveryAddress3',
    'customerPhone',
    'plannedArrivalTime',
    'actualArrivalTime',
    'priority',
    'timeDifference'
  ];

  hasArrived(deliveryRoute: DeliveryRoute) {
    deliveryRoute.actual_arrival_time = deliveryRoute.actual_arrival_time ? '' : new Date().toISOString();

    // Send a PATCH request to update the actual arrival time on the server
    this.driverRouteService.updateRoute(deliveryRoute.id.toString(), { actual_arrival_time: deliveryRoute.actual_arrival_time })
      .subscribe(updatedRoute => {
        console.log('Route updated:', updatedRoute);
        // Resort the data to maintain the sort order
        this.dataSource.data = this.dataSource.data.map(route =>
          route.id === updatedRoute.id ? updatedRoute : route
        );
        if (this.sort) {
          this.dataSource.sort = this.sort;  // Ensure sorting is applied
        }
      }, error => {
        console.error('Error updating route:', error);
        this.errorMessage = 'Error updating route, please try again later';
      });
  }

  applyFilter() {
    this.loadDeliveryRoutes();
  }
}
