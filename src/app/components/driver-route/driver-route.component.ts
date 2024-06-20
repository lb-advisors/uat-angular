import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DeliveryRoute } from '../../models/delivery-route';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-driver-route',
  templateUrl: './driver-route.component.html',
  styleUrls: ['./driver-route.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DriverRouteComponent implements OnInit {
  dataSource = new MatTableDataSource<DeliveryRoute>();
  isProduction: boolean;
  drivers: string[] = ['Armen', 'Narek', 'Tigran', 'Aram', 'Garen'];
  selectedDriver: string = '';

  constructor() {
    console.log('constructor');

    this.isProduction = environment.production;
  }

  ngOnInit() {
    console.log('ngOnInit');

    // Dummy data for delivery routes
    const deliveryRoutes = [
      { driver_name: 'Armen', customer_name: 'SAVORE CUISINE & EVENTS', address: '601 E 4th St, Los Angeles, CA 90013', delivery_date: new Date(), has_arrived: true, status: 'Arrived', delivery_time: new Date(), photo: '' },
      { driver_name: 'Armen', customer_name: 'THE LONELY OYSTER', address: '5100 York Blvd, Los Angeles, CA 90042', delivery_date: new Date(), has_arrived: false, status: 'Not arrived', delivery_time: null, photo: '' },
      { driver_name: 'Armen', customer_name: 'GOURMET FOOD SOLUTIONS', address: '821 Traction Ave, Los Angeles, CA 90013', delivery_date: new Date(), has_arrived: false, status: 'Arrived', delivery_time: new Date(), photo: '' },
      { driver_name: 'Armen', customer_name: 'DE LA NONNA', address: '2100 E 7th Pl, Los Angeles, CA 90021', delivery_date: new Date(), has_arrived: false, status: 'Not arrived', delivery_time: null, photo: '' },
      { driver_name: 'Armen', customer_name: 'AMANTE', address: '2100 Sunset Blvd, Los Angeles, CA 90026', delivery_date: new Date(), has_arrived: false, status: 'Arrived', delivery_time: new Date(), photo: '' },
      { driver_name: 'Narek', customer_name: 'CAROUSEL RESTAURANT', address: '5112 Hollywood Blvd, Los Angeles, CA 90027', delivery_date: new Date(), has_arrived: false, status: 'Not arrived', delivery_time: null, photo: '' },
      { driver_name: 'Narek', customer_name: 'PHORAGE', address: '3300 Overland Ave, Los Angeles, CA 90034', delivery_date: new Date(), has_arrived: false, status: 'Arrived', delivery_time: new Date(), photo: '' },
      { driver_name: 'Narek', customer_name: 'CHARCOAL RESTAURANT-VENICE', address: '425 Washington Blvd, Venice, CA 90291', delivery_date: new Date(), has_arrived: false, status: 'Not arrived', delivery_time: null, photo: '' },
      { driver_name: 'Narek', customer_name: 'DACSU LLC', address: '655 S Main St, Los Angeles, CA 90014', delivery_date: new Date(), has_arrived: false, status: 'Arrived', delivery_time: new Date(), photo: '' },
      { driver_name: 'Narek', customer_name: 'FENNEL KITCHEN & BAR', address: '1046 S Fairfax Ave, Los Angeles, CA 90019', delivery_date: new Date(), has_arrived: false, status: 'Not arrived', delivery_time: null, photo: '' },
      { driver_name: 'Tigran', customer_name: 'TOPANGA SOCIAL', address: '6600 Topanga Canyon Blvd, Canoga Park, CA 91303', delivery_date: new Date(), has_arrived: false, status: 'Arrived', delivery_time: new Date(), photo: '' },
      { driver_name: 'Tigran', customer_name: 'GOURMET FOOD SOLUTIONS', address: '821 Traction Ave, Los Angeles, CA 90013', delivery_date: new Date(), has_arrived: false, status: 'Not arrived', delivery_time: null, photo: '' },
      { driver_name: 'Tigran', customer_name: 'CAROUSEL / NAIRI', address: '5112 Hollywood Blvd, Los Angeles, CA 90027', delivery_date: new Date(), has_arrived: false, status: 'Arrived', delivery_time: new Date(), photo: '' },
      { driver_name: 'Tigran', customer_name: 'MARINA - PASADENA', address: '1286 E Colorado Blvd, Pasadena, CA 91106', delivery_date: new Date(), has_arrived: false, status: 'Not arrived', delivery_time: null, photo: '' },
      { driver_name: 'Tigran', customer_name: 'THE COPPER KEY', address: '6363 Wilshire Blvd, Los Angeles, CA 90048', delivery_date: new Date(), has_arrived: false, status: 'Arrived', delivery_time: new Date(), photo: '' },
      { driver_name: 'Aram', customer_name: 'SAVORE CUISINE & EVENTS', address: '601 E 4th St, Los Angeles, CA 90013', delivery_date: new Date(), has_arrived: false, status: 'Not arrived', delivery_time: null, photo: '' },
      { driver_name: 'Aram', customer_name: 'CAROUSEL / NAIRI', address: '5112 Hollywood Blvd, Los Angeles, CA 90027', delivery_date: new Date(), has_arrived: false, status: 'Arrived', delivery_time: new Date(), photo: '' },
      { driver_name: 'Aram', customer_name: 'DACSU LLC', address: '655 S Main St, Los Angeles, CA 90014', delivery_date: new Date(), has_arrived: false, status: 'Not arrived', delivery_time: null, photo: '' },
      { driver_name: 'Aram', customer_name: 'RAPPAHANNOCK OYSTER BAR', address: '1318 E 7th St, Los Angeles, CA 90021', delivery_date: new Date(), has_arrived: false, status: 'Arrived', delivery_time: new Date(), photo: '' },
      { driver_name: 'Aram', customer_name: 'THE LONELY OYSTER', address: '5100 York Blvd, Los Angeles, CA 90042', delivery_date: new Date(), has_arrived: false, status: 'Not arrived', delivery_time: null, photo: '' },
      { driver_name: 'Garen', customer_name: 'CHARCOAL RESTAURANT-VENICE', address: '425 Washington Blvd, Venice, CA 90291', delivery_date: new Date(), has_arrived: false, status: 'Arrived', delivery_time: new Date(), photo: '' },
      { driver_name: 'Garen', customer_name: 'KAKKOI SUSHI', address: '152 S Western Ave, Los Angeles, CA 90004', delivery_date: new Date(), has_arrived: false, status: 'Not arrived', delivery_time: null, photo: '' },
      { driver_name: 'Garen', customer_name: 'GO TRUCKS CATERING', address: '221 S Grand Ave, Los Angeles, CA 90012', delivery_date: new Date(), has_arrived: false, status: 'Arrived', delivery_time: new Date(), photo: '' },
      { driver_name: 'Garen', customer_name: 'THE LONELY OYSTER', address: '5100 York Blvd, Los Angeles, CA 90042', delivery_date: new Date(), has_arrived: false, status: 'Not arrived', delivery_time: null, photo: '' },
      { driver_name: 'Garen', customer_name: 'CHARCOAL RESTAURANT-VENICE', address: '425 Washington Blvd, Venice, CA 90291', delivery_date: new Date(), has_arrived: false, status: 'Arrived', delivery_time: new Date(), photo: '' },
    ];

    this.dataSource.data = deliveryRoutes;
  }

  displayedColumns: string[] = [
    'customer_name',
    'address',
    'has_arrived',
    'photo',
  ];

  hasArrived(deliveryRoute: DeliveryRoute) {
    // Toggle arrival status and update row properties
    deliveryRoute.has_arrived = !deliveryRoute.has_arrived;
    deliveryRoute.status = deliveryRoute.has_arrived ? 'Arrived' : 'Not arrived';
    deliveryRoute.delivery_date = deliveryRoute.has_arrived ? new Date() : null;
    deliveryRoute.delivery_time = deliveryRoute.has_arrived ? new Date() : null;
  }

  filterRoutes() {
    const deliveryRoutes = [
      { driver_name: 'Armen', customer_name: 'SAVORE CUISINE & EVENTS', address: '601 E 4th St, Los Angeles, CA 90013', delivery_date: new Date(), has_arrived: true, status: 'Arrived', delivery_time: new Date(), photo: '' },
      { driver_name: 'Armen', customer_name: 'THE LONELY OYSTER', address: '5100 York Blvd, Los Angeles, CA 90042', delivery_date: new Date(), has_arrived: false, status: 'Not arrived', delivery_time: null, photo: '' },
      { driver_name: 'Armen', customer_name: 'GOURMET FOOD SOLUTIONS', address: '821 Traction Ave, Los Angeles, CA 90013', delivery_date: new Date(), has_arrived: false, status: 'Arrived', delivery_time: new Date(), photo: '' },
      { driver_name: 'Armen', customer_name: 'DE LA NONNA', address: '2100 E 7th Pl, Los Angeles, CA 90021', delivery_date: new Date(), has_arrived: false, status: 'Not arrived', delivery_time: null, photo: '' },
      { driver_name: 'Armen', customer_name: 'AMANTE', address: '2100 Sunset Blvd, Los Angeles, CA 90026', delivery_date: new Date(), has_arrived: false, status: 'Arrived', delivery_time: new Date(), photo: '' },
      { driver_name: 'Narek', customer_name: 'CAROUSEL RESTAURANT', address: '5112 Hollywood Blvd, Los Angeles, CA 90027', delivery_date: new Date(), has_arrived: false, status: 'Not arrived', delivery_time: null, photo: '' },
      { driver_name: 'Narek', customer_name: 'PHORAGE', address: '3300 Overland Ave, Los Angeles, CA 90034', delivery_date: new Date(), has_arrived: false, status: 'Arrived', delivery_time: new Date(), photo: '' },
      { driver_name: 'Narek', customer_name: 'CHARCOAL RESTAURANT-VENICE', address: '425 Washington Blvd, Venice, CA 90291', delivery_date: new Date(), has_arrived: false, status: 'Not arrived', delivery_time: null, photo: '' },
      { driver_name: 'Narek', customer_name: 'DACSU LLC', address: '655 S Main St, Los Angeles, CA 90014', delivery_date: new Date(), has_arrived: false, status: 'Arrived', delivery_time: new Date(), photo: '' },
      { driver_name: 'Narek', customer_name: 'FENNEL KITCHEN & BAR', address: '1046 S Fairfax Ave, Los Angeles, CA 90019', delivery_date: new Date(), has_arrived: false, status: 'Not arrived', delivery_time: null, photo: '' },
      { driver_name: 'Tigran', customer_name: 'TOPANGA SOCIAL', address: '6600 Topanga Canyon Blvd, Canoga Park, CA 91303', delivery_date: new Date(), has_arrived: true, status: 'Arrived', delivery_time: new Date(), photo: '' },
      { driver_name: 'Tigran', customer_name: 'GOURMET FOOD SOLUTIONS', address: '821 Traction Ave, Los Angeles, CA 90013', delivery_date: new Date(), has_arrived: false, status: 'Not arrived', delivery_time: null, photo: '' },
      { driver_name: 'Tigran', customer_name: 'CAROUSEL / NAIRI', address: '5112 Hollywood Blvd, Los Angeles, CA 90027', delivery_date: new Date(), has_arrived: false, status: 'Arrived', delivery_time: new Date(), photo: '' },
      { driver_name: 'Tigran', customer_name: 'MARINA - PASADENA', address: '1286 E Colorado Blvd, Pasadena, CA 91106', delivery_date: new Date(), has_arrived: false, status: 'Not arrived', delivery_time: null, photo: '' },
      { driver_name: 'Tigran', customer_name: 'THE COPPER KEY', address: '6363 Wilshire Blvd, Los Angeles, CA 90048', delivery_date: new Date(), has_arrived: false, status: 'Arrived', delivery_time: new Date(), photo: '' },
      { driver_name: 'Aram', customer_name: 'SAVORE CUISINE & EVENTS', address: '601 E 4th St, Los Angeles, CA 90013', delivery_date: new Date(), has_arrived: false, status: 'Not arrived', delivery_time: null, photo: '' },
      { driver_name: 'Aram', customer_name: 'CAROUSEL / NAIRI', address: '5112 Hollywood Blvd, Los Angeles, CA 90027', delivery_date: new Date(), has_arrived: false, status: 'Arrived', delivery_time: new Date(), photo: '' },
      { driver_name: 'Aram', customer_name: 'DACSU LLC', address: '655 S Main St, Los Angeles, CA 90014', delivery_date: new Date(), has_arrived: false, status: 'Not arrived', delivery_time: null, photo: '' },
      { driver_name: 'Aram', customer_name: 'RAPPAHANNOCK OYSTER BAR', address: '1318 E 7th St, Los Angeles, CA 90021', delivery_date: new Date(), has_arrived: false, status: 'Arrived', delivery_time: new Date(), photo: '' },
      { driver_name: 'Aram', customer_name: 'THE LONELY OYSTER', address: '5100 York Blvd, Los Angeles, CA 90042', delivery_date: new Date(), has_arrived: false, status: 'Not arrived', delivery_time: null, photo: '' },
      { driver_name: 'Garen', customer_name: 'CHARCOAL RESTAURANT-VENICE', address: '425 Washington Blvd, Venice, CA 90291', delivery_date: new Date(), has_arrived: false, status: 'Arrived', delivery_time: new Date(), photo: '' },
      { driver_name: 'Garen', customer_name: 'KAKKOI SUSHI', address: '152 S Western Ave, Los Angeles, CA 90004', delivery_date: new Date(), has_arrived: false, status: 'Not arrived', delivery_time: null, photo: '' },
      { driver_name: 'Garen', customer_name: 'GO TRUCKS CATERING', address: '221 S Grand Ave, Los Angeles, CA 90012', delivery_date: new Date(), has_arrived: false, status: 'Arrived', delivery_time: new Date(), photo: '' },
      { driver_name: 'Garen', customer_name: 'THE LONELY OYSTER', address: '5100 York Blvd, Los Angeles, CA 90042', delivery_date: new Date(), has_arrived: false, status: 'Not arrived', delivery_time: null, photo: '' },
      { driver_name: 'Garen', customer_name: 'CHARCOAL RESTAURANT-VENICE', address: '425 Washington Blvd, Venice, CA 90291', delivery_date: new Date(), has_arrived: false, status: 'Arrived', delivery_time: new Date(), photo: '' },
    ];

    if (this.selectedDriver) {
      this.dataSource.data = deliveryRoutes.filter(route => route.driver_name === this.selectedDriver);
    } else {
      this.dataSource.data = deliveryRoutes;
    }
    }
    
 
    }