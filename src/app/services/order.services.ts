import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../models/company.model';
import { SalesRep } from '../models/sales-rep.model';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  public loadCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${environment.apiUrl}/companies`);
  }

  public loadOrders(company_id: number, salesrep_name: string, past_hours: number): Observable<Order[]> {
    const apiUrl = `${environment.apiUrl}/companies/${company_id}/sales-reps/${salesrep_name}/orders?pastHours=${past_hours}`;
    return this.http.get<Order[]>(apiUrl);
  }

  public loadSalesRep(company_id: number): Observable<SalesRep[]> {
    return this.http.get<SalesRep[]>(`${environment.apiUrl}/companies/${company_id}/sales-reps`);
  }
}
