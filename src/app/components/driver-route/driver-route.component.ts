import { ChangeDetectionStrategy, Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DriverRouteService } from '../../services/driver-route.service';
import { DeliveryRoute } from '../../models/delivery-route.model';
import { environment } from '../../../environments/environment';

interface Driver {
  driver_name: string;
}

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
  drivers: string[] = [
    'Ramiro', 'Castillo', 'Barrera', 'Juan', 'Chapin', 'Nacho', 'Miguel', 'Sid', 'Adan', 'JIMMY', 'Byron', 'Garcia', 'George', 'Carlos', 'Alonzo', 'SFX', 'LAX DROP'
  ].sort();
  selectedDriver: string = 'Adan';
  deliveryDate: string = '2024-06-17'; // Default value
  errorMessage: string = '';

  constructor(private driverRouteService: DriverRouteService) {
    this.isProduction = environment.production;
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.loadDeliveryRoutes();
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

    if (driver) {
      console.log(`Fetching routes for driver: ${driver} on date: ${date}`);
      this.driverRouteService.getRoutes(driver, date).subscribe(
        (routes: DeliveryRoute[]) => {
          console.log('Fetched routes:', routes);
          routes.forEach(route => {
            if (route.planned_arrival_time) {
              console.log('Before conversion:', route.planned_arrival_time);
              route.planned_arrival_time_minutes = this.convertToMinutes(route.planned_arrival_time);
              console.log('After conversion:', route.planned_arrival_time_minutes);
            } else {
              console.log('No planned_arrival_time for route with ID:', route.id);
            }
          });
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

  convertToMinutes(time: string): number {
    if (!time) return 0;
    const timePart = time.split('T')[1]; // Extract the time part
    if (!timePart) {
      console.error('Time part extraction failed for:', time);
      return 0;
    }
    const [hours, minutes, seconds] = timePart.split(':').map(Number);
    return hours * 60 + minutes + seconds / 60;
  }

  calculateTimeDifference(routes: DeliveryRoute[]): string[] {
    const timeDiffs: string[] = [];
    for (let i = 1; i < routes.length; i++) {
      const prevMinutes = routes[i - 1].planned_arrival_time_minutes;
      const currentMinutes = routes[i].planned_arrival_time_minutes;
      if (prevMinutes !== undefined && currentMinutes !== undefined) {
        const diffMinutes = currentMinutes - prevMinutes;
        timeDiffs.push(diffMinutes.toFixed(2) + ' mins');
      } else {
        timeDiffs.push('');
      }
    }
    return timeDiffs;
  }

  displayedColumns: string[] = [
    'deliveryAddress1',
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

  onDriverChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedDriver = target.value;
    this.loadDeliveryRoutes();
  }
}
