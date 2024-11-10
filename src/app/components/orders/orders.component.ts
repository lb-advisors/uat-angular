import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap, tap } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { Company } from 'src/app/models/company.model';
import { Orders } from 'src/app/models/orders.model';
import { SalesRep } from 'src/app/models/sales-rep.model';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { AuthService } from 'src/app/services/auth.service';
import { OrderDetailsDialogComponent } from 'src/app/components/order-details-dialog/order-details-dialog.component';
import { environment } from 'src/environments/environment'; // Import the environment

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
    private authService: AuthService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      company: [],
      salesPerson: [],
      customerName: [''],
    });

    this.loadCompanies();
    this.setupSalesPersonListener();
    this.setupOrdersListener();
    this.setupCustomerNameFilterListener();
  }

  private loadCompanies(): void {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    this.companies$ = this.http.get<Company[]>(`${environment.apiUrl}/companies`, { headers }).pipe(
      tap((companies) => {
        if (companies && companies.length > 0) {
          this.form.get('company')!.setValue(companies[0]);
        }
      })
    );
  }

  private setupSalesPersonListener(): void {
    this.form.get('company')!.valueChanges.pipe(
      switchMap((company: Company) => {
        const token = this.authService.getToken();
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`
        });

        return this.http.get<SalesRep[]>(`${environment.apiUrl}/companies/${company.id}/sales-reps`, { headers });
      }),
      tap((salesreps) => {
        this.salesPersons$ = new Observable<SalesRep[]>((observer) => {
          observer.next(salesreps);
          observer.complete();
        });

        if (salesreps && salesreps.length > 0) {
          this.form.get('salesPerson')!.setValue(salesreps[0]);
        }

        this.loadOrders();
      })
    ).subscribe({
      error: (error) => {
        console.error('Failed to load sales reps:', error);
        this.snackbarService.showSnackBar('Failed to load sales reps.');
      }
    });
  }

  private setupOrdersListener(): void {
    this.form.get('salesPerson')!.valueChanges.subscribe(() => {
      this.loadOrders();
    });
  }

  private loadOrders(): void {
    const company = this.form.get('company')!.value;
    const salesrep = this.form.get('salesPerson')!.value;

    if (!company || !salesrep) {
      return;
    }

    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    const apiUrl = `${environment.apiUrl}/companies/${company.id}/sales-reps/${salesrep.name}/orders?pastHours=72`;
    this.http.get<Orders[]>(apiUrl, { headers }).subscribe({
      next: (orders) => {
        this.orders = orders;
        this.applyFilters();
      },
      error: (error) => {
        console.error('Failed to load orders:', error);
        this.snackbarService.showSnackBar('Failed to load orders.');
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

  onRowClick(order: Orders): void {
    this.dialog.open(OrderDetailsDialogComponent, {
      data: order,
      width: '800px',
    });
  }
}
