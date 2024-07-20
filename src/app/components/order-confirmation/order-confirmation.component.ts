import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { OrderForm } from 'src/app/models/order-form.model';

@Component({
  standalone: true,
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css'],
  imports: [CommonModule, LogoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderConfirmationComponent implements OnInit {
  orderData!: OrderForm;
  companyId!: number;

  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {
    this.orderData = history.state['order']; // Access the passed data here'
    this.companyId = history.state['companyId'];
  }

  goBack(): void {
    this.router.navigate([`/customer/${this.orderData.customerId}/order-form`]);
  }
}
