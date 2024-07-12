import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-exists',
  templateUrl: './order-exists.component.html',
  styleUrls: ['./order-exists.component.css']
})
export class OrderExistsComponent implements OnInit {
  orders: any[] = [];
  deliveryDate: string = '';
  company: string = 'PFF';
  imageSrc: string = 'assets/logo.png';
  hasShipToName: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.deliveryDate = params['deliveryDate'];
      this.company = params['company'] || 'PFF';
      this.imageSrc = params['image'] || 'assets/logo.png'; // Retrieve the image URL from query params
      const order = JSON.parse(params['orders']);
      this.orders = order.profiles.map((profile: any) => ({
        customerName: order.customerName,
        salesRepName: order.salesRepName,
        profileDescription: profile.profileDescription,
        unitType: profile.unitType,
        packSize: profile.packSize,
        price: profile.price,
        quantity: profile.quantity,
        deliveryDate: order.deliveryDate,
        shipToName: order.shipToName
      }));
      this.hasShipToName = this.orders.some(order => order.shipToName);
    });
  }

  calculateTotal(): number {
    return this.orders.reduce((total, order) => total + (order.price * order.quantity), 0);
  }

  goBack(): void {
    window.history.back();
  }
}
