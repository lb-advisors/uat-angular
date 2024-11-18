import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// Define the type for the vendor data
export interface Vendor {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class VendorsService {
  private apiUrl = `${environment.apiUrl}/vendors`; // Base API endpoint for vendors

  constructor(private http: HttpClient) {}

  /**
   * Fetch the list of vendors from the API
   * @returns Observable of vendor data
   */
  getVendors(): Observable<Vendor[]> {
    return this.http.get<Vendor[]>(this.apiUrl);
  }
}
