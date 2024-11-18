import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PreOrder } from '../models/preorder-form.model'; // Corrected import path

@Injectable({
  providedIn: 'root',
})
export class PreorderFormService {
  private apiUrl = 'https://uat-pffc.onrender.com/api/public/vendor'; // Base API URL

  constructor(private http: HttpClient) {}

  /**
   * Fetches preorders for a specific vendor by vendor ID.
   * @param vendorId - The ID of the vendor.
   * @returns An Observable of an array of PreOrder objects.
   */
  getPreOrdersByVendorId(vendorId: number): Observable<PreOrder[]> {
    const url = `${this.apiUrl}/${vendorId}/pre_orders`;
    return this.http.get<PreOrder[]>(url);
  }
}
