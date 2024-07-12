import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.orderData = JSON.parse(params['orderData']);
      this.imageSrc = params['image'] || 'assets/logo.png'; // Retrieve the image URL from query params
      this.products = this.orderData.products.filter((product: any) => product.quantity > 0); // Filter out items with quantity 0
      this.formatDeliveryDate();
    });
  }

  formatDeliveryDate(): void {
    if (this.orderData.deliveryDate) {
      const date = new Date(this.orderData.deliveryDate);
      const formattedDate = `${('0' + (date.getMonth() + 1)).slice(-2)}/${('0' + date.getDate()).slice(-2)}/${date.getFullYear()}`;
      this.orderData.deliveryDate = formattedDate;
    }
  }

  goBack(): void {
    this.router.navigate(['/order-form'], { queryParams: { customerID: this.orderData.customerId, company: this.orderData.company, image: this.imageSrc } });
  }
}
