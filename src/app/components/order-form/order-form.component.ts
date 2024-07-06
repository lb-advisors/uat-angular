import { Component, OnInit } from '@angular/core';
import { OrderFormService } from '../../services/order-form.service';
import { NgForm } from '@angular/forms';
import { Profile } from '../../models/order.model';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  orders: any[] = [];
  orderData: any = {};
  products: Profile[] = [];
  specialsProducts: Profile[] = [];
  deliveryDate: string = '';
  customerPo: string = '';
  customerId: string = '';

  constructor(private orderFormService: OrderFormService) {}

  ngOnInit(): void {}

  fetchCustomerData(): void {
    if (this.isValidCustomerId(this.customerId)) {
      this.orderFormService.fetchCustomerData(this.customerId).subscribe(data => {
        this.orderData = {
          customer_name: data.customerName,
          sales_rep: data.salesRepName,
          sales_rep_phone: data.salesRepPhone,
          customer_email: data.customerEmail,
          deliveryDate: this.deliveryDate,  // Initialize deliveryDate
          customerPo: this.customerPo       // Initialize customerPo
        };

        this.products = [];
        this.specialsProducts = [];

        data.profiles.forEach((profile: Profile) => {
          if (profile.customer_id === 1) {
            this.specialsProducts.push({ ...profile, quantity: 0, deliveryDate: this.deliveryDate, customerPo: this.customerPo });
          } else {
            this.products.push({ ...profile, quantity: 0, deliveryDate: this.deliveryDate, customerPo: this.customerPo });
          }
        });

        this.orders = data.orders || [];
        this.updateTotal(); // Initialize the total
      }, error => {
        console.error('Error fetching customer data:', error);
      });
    } else {
      console.error('Invalid customer ID:', this.customerId);
    }
  }

  goBack(): void {
    window.history.back();
  }

  updateRowStyle(event: any): void {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, '').slice(0, 4);
    const row = input.closest('tr');
    const quantity = parseFloat(input.value) || 0; // Default to 0 if empty or invalid

    if (quantity > 0) {
      row.classList.add('bold-row');
    } else {
      row.classList.remove('bold-row');
    }

    const productIndex = row.getAttribute('data-index');
    if (productIndex !== null) {
      const isSpecial = row.getAttribute('data-special') === 'true';
      if (isSpecial) {
        this.specialsProducts[productIndex].quantity = quantity;
      } else {
        this.products[productIndex].quantity = quantity;
      }
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
    const totalElements = document.querySelectorAll('.total-per-item');

    totalElements.forEach(element => {
      const subtotal = parseFloat(element.textContent?.replace(/[^0-9.-]+/g, '') || '0');
      total += isNaN(subtotal) ? 0 : subtotal;
    });

    const totalAmountSpan = document.getElementById('total-amount') as HTMLSpanElement;
    totalAmountSpan.textContent = total.toLocaleString('en-US', { style: 'currency', currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });

    const totalPriceInput = document.getElementById('total_price') as HTMLInputElement;
    totalPriceInput.value = total.toFixed(2);
  }

  submitOrder(form: NgForm): void {
    const errorMessage = this.validateForm(form);
    if (errorMessage) {
      this.displayErrorMessage(errorMessage);
      return;
    }

    const orderData = this.prepareOrderData();
    this.orderFormService.placeOrder(orderData).subscribe(response => {
      alert('Order submitted successfully');
      // Redirect or update UI as needed
    }, error => {
      this.displayErrorMessage('Failed to submit order. Please try again later.');
    });
  }

  restrictInput(event: any, maxLength: number): void {
    const input = event.target;
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
  }

  private isValidCustomerId(customerId: string): boolean {
    const customerIdNumber = Number(customerId);
    return !isNaN(customerIdNumber) && customerId.trim() !== '';
  }

  private validateForm(form: NgForm): string | null {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const deliveryDate = new Date(this.deliveryDate);
    deliveryDate.setHours(0, 0, 0, 0);

    if (!form.valid) {
      return 'Please fill out the form correctly.';
    }

    if (deliveryDate < today) {
      return 'Please select a date which is not in the past.';
    }

    if (deliveryDate.getTime() === today.getTime()) {
      return 'Please order at least one day in advance.';
    }

    const maxDeliveryDate = new Date(today);
    maxDeliveryDate.setMonth(maxDeliveryDate.getMonth() + 3);

    if (deliveryDate > maxDeliveryDate) {
      return 'Please only submit orders delivered within the next 3 months.';
    }

    if (deliveryDate.getDay() === 0) { // 0 means Sunday
      return 'We are closed on Sundays.';
    }

    if (!this.orderFormService.hasValidQuantities(this.products.concat(this.specialsProducts))) {
      return 'Please put in a quantity to submit your order.';
    }

    const totalPrice = this.orderFormService.calculateTotal(this.products.concat(this.specialsProducts));
    if (totalPrice > 10000) {
      return 'The total amount has to be less than $10,000.';
    }

    return null;
  }

  private displayErrorMessage(message: string): void {
    const errorMessageDiv = document.querySelector('.error-message') as HTMLDivElement;
    errorMessageDiv.textContent = message;
  }

  private prepareOrderData(): any {
    const totalPrice = parseFloat((document.getElementById('total_price') as HTMLInputElement).value);
    return {
      customer_id: this.orderData.customer_id,
      customer_name: this.orderData.customer_name,
      sales_rep: this.orderData.sales_rep,
      customer_email: this.orderData.customer_email,
      sales_rep_phone: this.orderData.sales_rep_phone,
      total_price: totalPrice,
      delivery_date: this.deliveryDate,
      customer_po: this.customerPo,
      submitter_ip: '', // Set this on the backend
      order_id: '', // Set this on the backend
      products: this.products.concat(this.specialsProducts) // Combine both products and specials
    };
  }
}
