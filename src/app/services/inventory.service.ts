import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

interface InventoryItem {
  id: number;
  compDescription: string;
  unitType: string;
  packSize: string;
  activePrice: number;
  woh: number | null;
}

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getInventoryItems(page: number, size: number): Observable<InventoryItem[]> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<{ content: InventoryItem[] }>(`${this.apiUrl}/inventory`, { params }).pipe(
      map(response => response.content),
      catchError((error) => {
        console.error('Error fetching inventory items:', error);
        return throwError(() => new Error('Error fetching inventory items'));
      })
    );
  }
}
