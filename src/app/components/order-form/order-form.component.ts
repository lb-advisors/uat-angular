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
  imageSrc: string = 'assets/logo.png';
  imageBackgroundColor: string = 'rgba(0, 16, 46, 1)';
  shiptoNames: { id: string, name: string }[] = [];
  selectedShiptoID: string = '';

  constructor(
    private orderFormService: OrderFormService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.customerId = params['customerID'] || '';
      this.company = params['company'] || 'PFF';
      this.updateImageAndBackground();
      if (this.customerId) {
        this.fetchCustomerData();
      }
    });

    this.fetchSpecialsData();
  }

  updateImageAndBackground(): void {
    if (this.company === 'FOG-RIVER') {
      this.imageSrc = 'assets/fogriver.png';
      this.imageBackgroundColor = '#000000';
    } else if (this.company === 'PFF') {
      this.imageSrc = 'assets/logo.png';
      this.imageBackgroundColor = 'rgba(0, 16, 46, 1)';
    }
  }

  fetchCustomerData(): void {
    if (this.isValidCustomerId(this.customerId)) {
      this.orderFormService.fetchCustomerData(this.customerId).subscribe(data => {
        this.orderData = {
          customerId: this.customerId,
          customerName: data.customerName,
          salesRepName: data.salesRepName,
          salesRepPhone: data.salesRepPhone,
          customerEmail: data.customerEmail,
          deliveryDate: this.deliveryDate,
          shipToId: this.selectedShiptoID,
          shipToName: this.shiptoNames.find(shipto => shipto.id === this.selectedShiptoID)?.name || ''
        };

        this.products = data.profiles.map((profile: Profile) => ({
          profileDid: profile.id, // Ensure the profile ID is mapped correctly
          profileDescription: profile.profileDescription,
          unitTypePd: profile.unitTypePd,
          packSizePd: profile.packSizePd,
          salesPrice: profile.salesPrice,
          quantity: profile.quantity || 0
        })) || [];
        this.orders = data.orders || [];
        this.shiptoNames = data.shipTos.map((shipto: any) => ({ id: shipto.id, name: shipto.shipToName })) || [];
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
    const specialsCustomerId = '1';
    this.orderFormService.fetchCustomerData(specialsCustomerId).subscribe(data => {
      this.specialsProducts = data.profiles.map((profile: Profile) => ({
        profileDid: profile.id, // Ensure the profile ID is mapped correctly
        profileDescription: profile.profileDescription,
        unitTypePd: profile.unitTypePd,
        packSizePd: profile.packSizePd,
        salesPrice: profile.salesPrice,
        quantity: profile.quantity || 0
      })) || [];
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
    const quantity = parseFloat(input.value) || 0;

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
  
    const orderProfiles = this.prepareOrderData();
  
    orderProfiles.forEach(profile => {
      const orderData = {
        customerId: this.customerId,
        deliveryDate: this.deliveryDate,
       // totalPrice: this.orderFormService.calculateTotal([profile]),
        orderProfiles: [{
          profileDid: profile.profileDid,
          quantity: profile.quantity
        }]
      };
  
      this.orderFormService.placeOrder(this.customerId, orderData).subscribe(response => {
        console.log('Order submitted successfully for profile', profile);
      }, error => {
        this.displayErrorMessage('Failed to submit order for profile. Please try again later.');
      });
    });
  
    alert('Order(s) submitted successfully');
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

    if (deliveryDate.getDay() === 0) {
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

  private prepareOrderData(): any[] {
    return this.products.concat(this.specialsProducts)
      .filter(product => product.quantity && product.quantity > 0)
      .map(product => ({
        profileDid: product.profileDid,
        quantity: product.quantity
      }));
  }
  
}
