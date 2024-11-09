import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap, tap } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { Company } from 'src/app/models/company.model';
import { Orders } from 'src/app/models/orders.model';
import { SalesRep } from 'src/app/models/sales-rep.model';
import { OrderLinksService } from 'src/app/services/order-links.service';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, LogoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent implements OnInit {
  form!: FormGroup;
  companies$!: Observable<Company[]>;
  salesPersons$!: Observable<SalesRep[]>;
  orders: Orders[] = [];
  filteredOrders: Orders[] = [];

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private snackbarService: SnackbarService,
    private orderLinksService: OrderLinksService,
    private authService: AuthService // Inject AuthService to get the token
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      company: [],
      salesPerson: [],
      customerName: [''],
    });

    this.loadCompaniesAndSetDefaults();
    this.setupSalesPersonListener();
    this.setupOrdersListener();
    this.setupCustomerNameFilterListener();
  }

  private loadCompaniesAndSetDefaults(): void {
    this.companies$ = this.orderLinksService.getCompanies().pipe(
      tap((companies) => {
        const defaultCompany = companies.find((company) => company.id === 3);
        if (defaultCompany) {
          this.form.get('company')!.setValue(defaultCompany);
        }
      })
    );
  }

  private setupSalesPersonListener(): void {
    this.form.get('company')!.valueChanges.pipe(
      switchMap((company) =>
        this.orderLinksService.getSalesPersons(company.id).pipe(
          tap((salesreps) => {
            salesreps.sort((a, b) => a.name.localeCompare(b.name));
            this.salesPersons$ = new Observable<SalesRep[]>((observer) => {
              observer.next(salesreps);
              observer.complete();
            });

            const defaultSalesRep = salesreps.find((rep) => rep.name === 'Marcelo');
            if (defaultSalesRep) {
              this.form.get('salesPerson')!.setValue(defaultSalesRep);
            } else if (salesreps.length > 0) {
              this.form.get('salesPerson')!.setValue(salesreps[0]);
            }
          })
        )
      )
    ).subscribe();
  }

  private setupOrdersListener(): void {
    this.form.get('salesPerson')!.valueChanges.pipe(
      switchMap((salesrep) => {
        const company = this.form.get('company')!.value;
        const apiUrl = `https://uat-pffc.onrender.com/api/companies/${company.id}/sales-reps/${salesrep.name}/orders?pastHours=72`;

        const token = this.authService.getToken(); // Get token from AuthService
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`
        });

        return this.http.get<Orders[]>(apiUrl, { headers });
      }),
      tap((orders) => {
        this.orders = orders;
        this.applyFilters();
      })
    ).subscribe({
      error: (error) => {
        console.error('An error occurred:', error);
      }
    });
  }

  private setupCustomerNameFilterListener(): void {
    this.form.get('customerName')!.valueChanges.subscribe(() => this.applyFilters());
  }

  private applyFilters(): void {
    const customerName = this.form.get('customerName')!.value?.toLowerCase() || '';
    this.filteredOrders = this.orders.filter(order =>
      order.customerName.toLowerCase().includes(customerName)
    );
    this.cdr.markForCheck();
  }
}
