import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { Customer } from '../models/customer.model';
import { SalesRep } from '../models/sales-rep.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class OrderLinksService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(
      `${this.apiUrl}/companies`,
      { headers: this.getHeaders() }
    );
  }

  getSalesPersons(companyId: number): Observable<SalesRep[]> {
    return this.http.get<SalesRep[]>(
      `${this.apiUrl}/companies/${companyId}/sales-reps`,
      { headers: this.getHeaders() }
    );
  }

  getCustomers(companyId: number, salesRepName: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(
      `${this.apiUrl}/companies/${companyId}/sales-reps/${salesRepName}/customers`,
      { headers: this.getHeaders() }
    );
  }
}