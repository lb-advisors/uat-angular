import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { Customer } from '../models/customer.model';
import { SalesRep } from '../models/sales-rep.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderLinksService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiUrl}/companies`);
  }

  getSalesPersons(companyId: number) {
    return this.http.get<SalesRep[]>(
      `${this.apiUrl}/companies/${companyId}/sales-reps`,
    );
  }

  getCustomers(companyId: number, salesRepName: string) {
    return this.http.get<Customer[]>(
      `${this.apiUrl}/companies/${companyId}/sales-reps/${salesRepName}/customers`,
    );
  }
}
