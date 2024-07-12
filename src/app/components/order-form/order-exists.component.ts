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
  imageSrc: string = 'assets/logo.png';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.deliveryDate = params['deliveryDate'];
      this.orders = JSON.parse(params['orders']);
    });
  }

  calculateTotal(): number {
    return this.orders.reduce((total, order) => total + order.totalPrice, 0);
  }

  goBack(): void {
    window.history.back();
  }
}
