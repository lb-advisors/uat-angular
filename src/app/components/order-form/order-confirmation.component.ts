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
      this.products = this.orderData.products; // Update this line to match your previous code
      this.updateImageAndBackground();
    });
  }

  updateImageAndBackground(): void {
    if (this.orderData.company === 'FOG-RIVER') {
      this.imageSrc = 'assets/fogriver.png';
    } else if (this.orderData.company === 'PFF') {
      this.imageSrc = 'assets/logo.png';
    }
  }
}
