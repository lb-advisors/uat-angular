import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { InventoryItem } from '../models/inventoty-item.model';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getInventoryItems(
    page: number,
    size: number,
    searchTerm: string,
  ): Observable<InventoryItem[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('search', searchTerm);
    return this.http
      .get<{ content: InventoryItem[] }>(`${this.apiUrl}/inventory`, {
        params,
      })
      .pipe(map((response) => response.content));
  }
}
