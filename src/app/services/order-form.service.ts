import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderFormService {

  private apiUrl = 'https://uat-pffc.onrender.com/api/customers';

  constructor(private http: HttpClient) { }

  fetchCustomerData(customerId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${customerId}/profiles`);
  }

  placeOrder(customerId: string, orderData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${customerId}/orders`, orderData);
  }

  calculateTotal(products: Profile[]): number {
    let total = 0;
    products.forEach(product => {
      const quantity = product.quantity !== undefined ? parseFloat(product.quantity.toString()) : 0;
      const price = product.salesPrice !== undefined ? parseFloat(product.salesPrice.toString()) : 0;
      const packSize = product.packSizePd !== undefined ? parseFloat(product.packSizePd.toString()) : 1;
      const lineTotal = quantity * packSize * price;
      total += lineTotal;
    });

    const totalAmountSpan = document.getElementById('total-amount') as HTMLSpanElement;
    totalAmountSpan.textContent = total.toLocaleString('en-US', { style: 'currency', currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });

    const totalPriceInput = document.getElementById('total_price') as HTMLInputElement;
    totalPriceInput.value = total.toFixed(2);

    return total;
  }

  checkExistingOrder(customerId: string, deliveryDate: string): Observable<any[]> {
    return this.http.get<any[]>(`/api/orders/check-existing?customerId=${customerId}&deliveryDate=${deliveryDate}`);
  }
  
  hasValidQuantities(products: Profile[]): boolean {
    let hasQuantity = false;
    let invalidQuantity = false;

    products.forEach(product => {
      const quantity = product.quantity !== undefined ? parseFloat(product.quantity.toString()) : NaN;
      if (isNaN(quantity) || quantity < 0) {
        invalidQuantity = true;
      } else if (quantity > 0) {
        hasQuantity = true;
      }
    });

    return hasQuantity && !invalidQuantity;
  }
}
