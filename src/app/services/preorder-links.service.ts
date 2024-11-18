import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PreOrders } from '../models/preorders.model';
import { environment } from '../../environments/environment'; // Import environment

@Injectable({
  providedIn: 'root',
})
export class PreOrderLinksService {
  private baseUrl = environment.apiUrl; // Use dynamic environment variable for API base URL

  constructor(private http: HttpClient) {}

  // Fetch all preorders and extract unique vendors
  getVendors(): Observable<{ vendorId: number; vendorName: string }[]> {
    return this.http.get<PreOrders[]>(`${this.baseUrl}/preorders`).pipe(
      map((preOrders) => {
        // Extract unique vendors from preOrders
        const vendorsMap = new Map<number, string>();
        preOrders.forEach((preOrder) => {
          if (!vendorsMap.has(preOrder.vendorId)) {
            vendorsMap.set(preOrder.vendorId, preOrder.vendorName);
          }
        });
        // Convert Map to an array of vendor objects
        return Array.from(vendorsMap).map(([id, name]) => ({ vendorId: id, vendorName: name }));
      })
    );
  }
}
