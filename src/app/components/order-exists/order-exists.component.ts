import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf, NgFor, CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-order-exists',
    templateUrl: './order-exists.component.html',
    styleUrls: ['./order-exists.component.css'],
    standalone: true,
    imports: [NgIf, NgFor, CurrencyPipe]
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
        deliveryDate: this.deliveryDate, // Use the delivery date from query params
        shipToName: order.shipToName
      }));
      this.hasShipToName = this.orders.some(order => order.shipToName);
      this.formatDeliveryDate();
    });
  }

  formatDeliveryDate(): void {
    if (this.deliveryDate) {
      const date = new Date(this.deliveryDate);
      const formattedDate = `${('0' + (date.getMonth() + 1)).slice(-2)}/${('0' + date.getDate()).slice(-2)}/${date.getFullYear()}`;
      this.deliveryDate = formattedDate;
      /*this.orders.forEach(order => order.deliveryDate = formattedDate); // Ensure consistency in the grid */
    }
  }

  calculateTotal(): number {
    return this.orders.reduce((total, order) => total + (order.price * order.quantity), 0);
  }

  goBack(): void {
    window.history.back();
  }
}
