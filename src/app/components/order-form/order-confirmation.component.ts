import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location, NgFor, DecimalPipe, CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-order-confirmation',
    templateUrl: './order-confirmation.component.html',
    styleUrls: ['./order-confirmation.component.css'],
    standalone: true,
    imports: [NgFor, DecimalPipe, CurrencyPipe]
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
      const dateParts = this.orderData.deliveryDate.split('-');
      const formattedDate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;
      this.orderData.deliveryDate = formattedDate;
    }
  }

  goBack(): void {
    this.router.navigate(['/order-form'], { queryParams: { customerID: this.orderData.customerId, company: this.orderData.company, image: this.imageSrc } });
  }
}
