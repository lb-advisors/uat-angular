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

  // Map for planned arrival times
  arrivalTimes: { [key: number]: string } = {
    351: '09:46:13',
    346: '11:30:58',
    455: '09:48:37',
    370: '09:19:49',
    394: '09:11:25',
    448: '12:39:52',
    396: '09:29:25',
    350: '09:13:13',
    438: '09:13:39',
    382: '08:49:13',
    314: '16:44:00',
    341: '09:26:58',
    378: '11:26:49',
    386: '09:48:13',
    431: '12:00:28',
    426: '09:36:28',
    322: '11:13:49',
    450: '08:00:37',
    424: '09:15:28',
    406: '10:13:52',
    364: '10:32:43',
    433: '12:21:28',
    405: '09:51:52',
    389: '10:28:13',
    462: '12:13:37',
    330: '09:05:51',
    345: '11:14:58',
    309: '10:11:39',
    436: '08:48:39',
    451: '08:10:37',
    323: '11:47:49',
    379: '11:47:49',
    320: '09:53:49',
    337: '11:05:51',
    348: '12:21:58',
    375: '10:49:49',
    437: '09:02:39',
    415: '12:14:30',
    399: '10:29:25',
    408: '09:33:30',
    417: '12:54:30',
    454: '09:05:37',
    452: '08:20:37',
    390: '10:49:13',
    329: '08:50:51',
    311: '15:23:00',
    401: '11:02:25',
    420: '08:57:07',
    461: '12:04:37',
    376: '11:02:49',
    328: '12:58:49',
    338: '11:17:51',
    419: '08:17:07',
    358: '08:00:43',
    412: '11:10:30',
    440: '09:44:39',
    447: '12:21:52',
    349: '12:44:58',
    457: '10:04:37',
    409: '09:41:30',
    324: '11:59:49',
    310: '10:24:39',
    357: '13:35:13',
    331: '09:22:51',
    404: '09:38:52',
    398: '10:01:25',
    353: '11:04:13',
    315: '16:51:00',
    456: '09:57:37',
    366: '11:19:43',
    388: '10:19:13',
    397: '09:38:25',
    427: '09:50:28',
    347: '11:42:58',
    418: '07:37:07',
    321: '10:18:49',
    361: '09:41:43',
    407: '09:00:30',
    333: '09:55:51',
    325: '12:16:49',
    402: '11:19:25',
    395: '09:20:25',
    444: '11:27:52',
    443: '11:12:52',
    387: '10:01:13',
    446: '12:00:52',
    445: '11:48:52',
    334: '10:15:51',
    400: '10:46:25',
    373: '10:10:49',
    352: '10:30:13',
    363: '10:12:43',
    343: '10:31:58',
    393: '08:59:25',
    362: '09:56:43',
    327: '12:48:49',
    430: '11:31:28',
    312: '15:53:00',
    340: '11:47:51',
    356: '13:03:13',
    460: '11:41:37',
    391: '11:00:13',
    317: '08:56:49',
    416: '12:22:30',
    342: '10:12:58',
    414: '11:43:30',
    458: '10:32:37',
    459: '11:34:37',
    368: '08:58:49',
    372: '09:52:49',
    369: '09:08:49',
    441: '10:28:52',
    339: '11:27:51',
    326: '12:37:49',
    360: '09:15:43',
    344: '10:43:58',
    385: '09:38:13',
    463: '12:28:37',
    371: '09:33:49',
    367: '11:48:43',
    374: '10:41:49',
    335: '10:48:51',
    410: '10:05:30',
    439: '09:36:39',
    365: '10:46:43',
    428: '10:25:28',
    355: '12:13:13',
    383: '09:11:13',
    318: '09:11:49',
    336: '10:56:51',
    413: '11:25:30',
    308: '09:55:39',
    423: '09:03:28',
    381: '08:30:13',
    313: '16:00:00',
    359: '08:35:43',
    442: '10:46:52',
    354: '11:37:13',
    421: '09:21:07',
    377: '11:12:49',
    411: '10:34:30',
    392: '08:49:25',
    429: '11:04:28',
    453: '08:56:37',
    425: '09:27:28',
    432: '12:09:28',
    434: '12:47:28',
    316: '08:40:49',
    403: '09:04:52',
    332: '09:31:51',
    319: '09:39:49',
    422: '08:54:28',
    449: '12:42:52',
    380: '11:00:00',
    435: '08:39:39',
    384: '09:30:13'
  };

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
            // Set planned_arrival_time if it exists in the arrivalTimes map
            if (this.arrivalTimes[route.id]) {
              route.planned_arrival_time = this.arrivalTimes[route.id];
            }

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
    const [hours, minutes, seconds] = time.split(':').map(Number);
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
    'planned_arrival_time',
    'planned_arrival_time_minutes',
    'actual_arrival_time',
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
