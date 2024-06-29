import { Component, OnInit } from '@angular/core';
import { OrderFormService } from '../../services/order-form.service';
import { NgForm } from '@angular/forms';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  orders: Order[] = [];
  orderData: any = {};
  products: any[] = [];
  selectedShipto: string = '';
  deliveryDate: string = '';
  customerPo: string = '';
  profiles: any[] = [];

  constructor(private orderFormService: OrderFormService) {}

  ngOnInit(): void {
    const customerId = 123; // Replace with actual customer ID
    this.orderFormService.getCustomerInfo(customerId).subscribe(data => {
      this.orderData = data;
      this.products = data.products;
      this.orders = data.orders || [];
      this.profiles = data.profiles || [];
    });
  }

  goBack(): void {
    window.history.back();
  }

  updateRowStyle(event: any): void {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, '').slice(0, 4);
    const row = input.closest('tr');
    const quantity = parseFloat(input.value);

    if (quantity > 0) {
      row.classList.add('bold-row');
    } else {
      row.classList.remove('bold-row');
    }

    this.updateTotal();
  }

  checkEmptyInput(event: any): void {
    const input = event.target;
    if (input.value === '') {
      input.value = '0';
    }
    this.updateRowStyle(event);
  }

  updateTotal(): void {
    let total = 0;
    this.products.forEach(product => {
      const quantity = parseFloat(product.quantity);
      const lineTotal = quantity * product.pack_size * product.price;
      total += lineTotal;
    });

    const totalAmountSpan = document.getElementById('total-amount') as HTMLSpanElement;
    totalAmountSpan.textContent = total.toLocaleString('en-US', { style: 'currency', currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });

    const totalPriceInput = document.getElementById('total_price') as HTMLInputElement;
    totalPriceInput.value = total.toFixed(2);
  }

  submitOrder(form: NgForm): void {
    const errorMessageDiv = document.querySelector('.error-message') as HTMLDivElement;
    errorMessageDiv.textContent = '';

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const deliveryDate = new Date(this.deliveryDate);
    deliveryDate.setHours(0, 0, 0, 0);

    if (!form.valid) {
      errorMessageDiv.textContent = 'Please fill out the form correctly.';
      return;
    }

    if (deliveryDate < today) {
      errorMessageDiv.textContent = 'Please select a date which is not in the past.';
      return;
    }

    if (deliveryDate.getTime() === today.getTime()) {
      errorMessageDiv.textContent = 'Please order at least one day in advance.';
      return;
    }

    const maxDeliveryDate = new Date(today);
    maxDeliveryDate.setMonth(maxDeliveryDate.getMonth() + 3);

    if (deliveryDate > maxDeliveryDate) {
      errorMessageDiv.textContent = 'Please only submit orders delivered within the next 3 months.';
      return;
    }

    if (deliveryDate.getDay() === 0) { // 0 means Sunday
      errorMessageDiv.textContent = 'We are closed on Sundays.';
      return;
    }

    let hasQuantity = false;
    let invalidQuantity = false;
    this.products.forEach(product => {
      const quantity = parseFloat(product.quantity);

      if (quantity === null || isNaN(quantity)) {
        errorMessageDiv.textContent = 'Please put in a non-blank quantity to submit your order.';
        invalidQuantity = true;
      } else if (quantity < 0) {
        errorMessageDiv.textContent = 'Negative numbers are not accepted in the quantity.';
        invalidQuantity = true;
      } else if (quantity > 0) {
        hasQuantity = true;
      }
    });

    if (invalidQuantity) {
      return;
    }

    if (!hasQuantity) {
      errorMessageDiv.textContent = 'Please put in a quantity to submit your order.';
      return;
    }

    const totalPrice = parseFloat((document.getElementById('total_price') as HTMLInputElement).value);
    if (totalPrice > 10000) {
      errorMessageDiv.textContent = 'The total amount has to be less than $10,000.';
      return;
    }

    const orderData = {
      customer_id: this.orderData.customer_id,
      customer_name: this.orderData.customer_name,
      sales_rep: this.orderData.sales_rep,
      customer_email: this.orderData.customer_email,
      sales_rep_phone: this.orderData.sales_rep_phone,
      total_price: totalPrice,
      delivery_date: this.deliveryDate,
      submitter_ip: '', // Set this on the backend
      order_id: '', // Set this on the backend
      customer_po: this.customerPo,
      shipto_id: this.selectedShipto,
      shipto_name: this.getShiptoNameById(this.selectedShipto),
      products: this.products
    };

    this.orderFormService.placeOrder(orderData).subscribe(response => {
      alert('Order submitted successfully');
      // Redirect or update UI as needed
    }, error => {
      errorMessageDiv.textContent = 'Failed to submit order. Please try again later.';
    });
  }

  restrictInput(event: any, maxLength: number): void {
    const input = event.target;
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
  }

  updateShiptoId(): void {
    const shiptoSelect = document.getElementById('shipto-name') as HTMLSelectElement;
    const selectedOption = shiptoSelect.options[shiptoSelect.selectedIndex];
    const shiptoIdInput = document.getElementById('shipto-id') as HTMLInputElement;
    this.selectedShipto = selectedOption.getAttribute('data-id')!;
    shiptoIdInput.value = this.selectedShipto;
  }

  getShiptoNameById(id: string): string {
    const shipto = this.profiles.find(profile => profile.id === id);
    return shipto ? shipto.name : '';
  }
}
