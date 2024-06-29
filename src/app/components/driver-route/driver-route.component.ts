import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
  deliveryRoute$: Observable<DeliveryStop[]> | undefined;
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

  constructor(
    private driverRouteService: DriverRouteService,
    private snackbarService: SnackbarService,
  ) {}

  ngOnInit(): void {
    this.deliveryRoute$ = this.driverRouteService.getDeliveryRoute();
  }

  hasArrived(deliveryRoute: DeliveryStop) {
    this.driverRouteService.hasArrived(deliveryRoute.id.toString()).subscribe();
  }

  refreshDeliverRoute(driverName: string, deliveryDate: string) {
    if (!driverName || !deliveryDate) {
      this.snackbarService.showSnackBar('Enter a valid driver name and date');
    } else {
      this.driverRouteService.refreshDeliverRoute(driverName, deliveryDate);
    }
  }
}
