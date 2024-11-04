import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { InventoryItem } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProducts(
    page: number,
    size: number,
    searchTerm: string,
  ): Observable<InventoryItem[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('search', searchTerm);

    return this.http
      .get<{ content: InventoryItem[] }>(`${this.apiUrl}/products`, {
        params,
      })
      .pipe(
        map((response) =>
          response.content.map((item) => ({
            compItemId: item.compItemId, // Use compItemId to match the model
            compDescription: item.compDescription,
            origin: item.origin,
            woh: item.woh,
            sixtySales: item.sixtySales, // Use sixtySales to match the model
          }))
        )
      );
  }
}
