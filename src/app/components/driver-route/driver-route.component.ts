import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  SecurityContext,
} from '@angular/core';
import { DriverRouteService } from '../../services/driver-route.service';
import { Observable } from 'rxjs';
import { DeliveryStop } from 'src/app/models/delivery-stop.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { format } from 'date-fns';

interface Driver {
  name: string;
}

@Component({
  selector: 'app-driver-route',
  templateUrl: './driver-route.component.html',
  styleUrls: ['./driver-route.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DriverRouteComponent implements OnInit {
  driverNames$!: Observable<Driver[]>;
  deliveryRoute$: Observable<DeliveryStop[]> | undefined;
  today = format(new Date(), 'yyyy-MM-dd');
  selectedDriverName: string = '';

  displayedColumns: string[] = [
    'deliveryAddress1',
    'address',
    'customerPhone',
    'actualArrivalTime',
  ];

  constructor(
    private driverRouteService: DriverRouteService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.driverNames$ = this.driverRouteService.getDrivers().pipe(
      map((data) => {
        if (data && data.length > 0) {
          this.refreshDeliverRoute(data[0].name, this.today);
        }
        return data.sort((a, b) => a.name.localeCompare(b.name)); // Sort drivers by name in ascending order
      }),
    );
  }

  refreshDeliverRoute(driverName: string, deliveryDate: string): void {
    const formattedDate = new Date(deliveryDate).toISOString().split('T')[0]; // Ensure date is formatted as YYYY-MM-DD
    this.deliveryRoute$ = this.driverRouteService
      .getDeliveryRoute(driverName, formattedDate)
      .pipe(
        map((deliveryStops) => this.calculateTimeDifferences(deliveryStops)),
      );
  }

  hasArrived(deliveryRoute: DeliveryStop): void {
    this.driverRouteService.hasArrived(deliveryRoute.id.toString()).subscribe(
      () => {
        console.log('Delivery marked as arrived');
      },
      (error) => {
        console.error('Error marking delivery as arrived', error);
      },
    );
  }

  getGoogleMapsUrl(address2: string, address3: string): SafeUrl {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address2 + ' ' + address3,
    )}`;

    const sanitizedUrl = this.sanitizer.sanitize(SecurityContext.URL, url);
    if (sanitizedUrl) {
      return this.sanitizer.bypassSecurityTrustUrl(sanitizedUrl);
    } else {
      return '';
    }
  }

  private calculateTimeDifferences(
    deliveryStops: DeliveryStop[],
  ): DeliveryStop[] {
    for (let i = deliveryStops.length - 1; i > 0; i--) {
      const currentStop = deliveryStops[i];
      const previousStop = deliveryStops[i - 1];

      const currentTime = new Date(currentStop.plannedArrivalTime).getTime();
      const previousTime = new Date(previousStop.plannedArrivalTime).getTime();

      const timeDifferenceInMinutes = Math.round(
        (currentTime - previousTime) / 60000,
      );
      currentStop.timeDifference = timeDifferenceInMinutes;
    }

    if (deliveryStops.length > 0) {
      deliveryStops[0].timeDifference = undefined; // First row will have no time difference
    }
    return deliveryStops;
  }
}
