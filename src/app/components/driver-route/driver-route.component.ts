import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DriverRouteService } from '../../services/driver-route.service';
import { Observable } from 'rxjs';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { DeliveryStop } from 'src/app/models/delivery-stop.model';

@Component({
  selector: 'app-driver-route',
  templateUrl: './driver-route.component.html',
  styleUrls: ['./driver-route.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DriverRouteComponent implements OnInit {
  @ViewChild('driverName', { static: true }) driverName!: ElementRef;
  deliveryRoute$: Observable<DeliveryStop[]> | undefined;
  driverNames: string[] = [];
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
    'timeDifference',
  ];
  todayDate: string;

  constructor(
    private driverRouteService: DriverRouteService,
    private snackbarService: SnackbarService,
  ) {
    const today = new Date();
    this.todayDate = today.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.deliveryRoute$ = this.driverRouteService.getDeliveryRoute();
    this.loadDrivers();
  }

  loadDrivers(): void {
    this.driverRouteService.getDrivers().subscribe(
      (drivers) => {
        this.driverNames = drivers;
        console.log('Drivers loaded:', drivers); // Debugging line
      },
      (error) => {
        this.snackbarService.showSnackBar('Error loading driver names');
      }
    );
    this.driverRouteService.refreshDrivers(); // Fetch the drivers
  }

  refreshDeliverRoute(driverName: string, deliveryDate: string) {
    this.driverRouteService.refreshDeliverRoute(driverName, deliveryDate);
  }

  hasArrived(deliveryRoute: DeliveryStop) {
    this.driverRouteService.hasArrived(deliveryRoute.id.toString()).subscribe();
  }
}
