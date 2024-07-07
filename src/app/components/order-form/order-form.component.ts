import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  company: string = '';
  imageSrc: string = 'assets/logo.png'; // Default image source
  imageBackgroundColor: string = 'rgba(0, 16, 46, 1)'; // Default background color
  shiptoNames: { id: string, name: string }[] = []; // Array for shipto names and ids
  selectedShiptoID: string = '';

  constructor(
    private orderFormService: OrderFormService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.customerId = params['customerID'] || '';
      this.company = params['company'] || 'PFF'; // Default to PFF if not provided
      this.updateImageAndBackground();
      if (this.customerId) {
        this.fetchCustomerData();
      }
    });

    // Fetch specials data on initialization
    this.fetchSpecialsData();
  }

  updateImageAndBackground(): void {
    if (this.company === 'FOG-RIVER') {
      this.imageSrc = 'assets/fogriver.png';
      this.imageBackgroundColor = '#000000'; // Black background
    } else if (this.company === 'PFF') {
      this.imageSrc = 'assets/logo.png';
      this.imageBackgroundColor = 'rgba(0, 16, 46, 1)'; // Dark blue background
    }
  }

  fetchCustomerData(): void {
    if (this.isValidCustomerId(this.customerId)) {
      this.orderFormService.fetchCustomerData(this.customerId).subscribe(data => {
        this.orderData = {
          customer_name: data.customerName,
          sales_rep: data.salesRepName,
          sales_rep_phone: data.salesRepPhone,
          customer_email: data.customerEmail,
          customer_id: this.customerId,
          deliveryDate: this.deliveryDate,
          customerPo: this.customerPo
        };

        this.products = data.profiles.map((profile: Profile) => ({ ...profile, quantity: profile.quantity || 0 })) || [];
        this.orders = data.orders || [];
        this.shiptoNames = data.shiptoNames || [];
        this.selectedShiptoID = this.shiptoNames.length > 0 ? this.shiptoNames[0].id : '';
        this.updateTotal(); // Initialize the total
      }, error => {
        console.error('Error fetching customer data:', error);
      });
    } else {
      console.error('Invalid customer ID:', this.customerId);
    }
  }

  fetchSpecialsData(): void {
    const specialsCustomerId = '1'; // ID for specials
    this.orderFormService.fetchCustomerData(specialsCustomerId).subscribe(data => {
      this.specialsProducts = data.profiles.map((profile: Profile) => ({ ...profile, quantity: profile.quantity || 0 })) || [];
      this.updateTotal(); // Initialize the total for specials
    }, error => {
      console.error('Error fetching specials data:', error);
    });
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
        if (quantity > 0) {
          row.classList.add('special-bold-row');
        } else {
          row.classList.remove('special-bold-row');
        }
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
    const errorMessage = this.validateForm();
    if (errorMessage) {
      this.displayErrorMessage(errorMessage);
      return;
    }

    const orderData = this.prepareOrderData();
    this.orderFormService.placeOrder(this.customerId, orderData).subscribe(response => {
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

  private validateForm(): string | null {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!this.deliveryDate) {
      return 'Please select a delivery date';
    }

    const deliveryDate = new Date(this.deliveryDate);
    deliveryDate.setHours(0, 0, 0, 0);

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

    const hasQuantity = this.products.concat(this.specialsProducts).some(product => product.quantity && product.quantity > 0);
    if (!hasQuantity) {
      return 'Please select a quantity which is not 0';
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
      customerId: this.customerId,
      deliveryDate: this.deliveryDate,
      shipToId: this.selectedShiptoID,
      totalPrice: totalPrice,
      orderProfiles: this.products.concat(this.specialsProducts).map(product => ({
        profileDid: product.profileDid, // Ensure profileDid is part of the Profile model
        quantity: product.quantity
      }))
    };
  }
}
