import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  orderData: any = {};
  products: any[] = [];
  imageSrc: string = 'assets/logo.png';

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.orderData = JSON.parse(params['orderData']);
      this.imageSrc = params['image'] || 'assets/logo.png'; // Retrieve the image URL from query params
      this.products = this.orderData.products.filter((product: any) => product.quantity > 0); // Filter out items with quantity 0
    });
  }
}
