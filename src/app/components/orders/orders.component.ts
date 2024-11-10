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
    // Initialize the form with fields for company, sales person, and customer name
    this.form = this.fb.group({
      company: [],
      salesPerson: [],
      customerName: [''],
    });

    // Load companies and set the default company if available
    this.loadCompanies();
    this.setupSalesPersonListener();
    this.setupOrdersListener();
    this.setupCustomerNameFilterListener();
  }

  // Load all companies and populate the company filter
  private loadCompanies(): void {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    this.companies$ = this.http.get<Company[]>('https://uat-pffc.onrender.com/api/companies', { headers }).pipe(
      tap((companies) => {
        if (companies && companies.length > 0) {
          // Automatically set the first company in the list as the default selection
          this.form.get('company')!.setValue(companies[0]);
        }
      })
    );
  }

  // When the company changes, load the relevant sales reps for that company
  private setupSalesPersonListener(): void {
    this.form.get('company')!.valueChanges.pipe(
      switchMap((company: Company) => {
        const token = this.authService.getToken();
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`
        });

        return this.http.get<SalesRep[]>(`https://uat-pffc.onrender.com/api/companies/${company.id}/sales-reps`, { headers });
      }),
      tap((salesreps) => {
        // Update salesPersons$ observable with the new list
        this.salesPersons$ = new Observable<SalesRep[]>((observer) => {
          observer.next(salesreps);
          observer.complete();
        });
        
        // Automatically set the first sales rep as the default selection if available
        if (salesreps && salesreps.length > 0) {
          this.form.get('salesPerson')!.setValue(salesreps[0]);
        }

        // Trigger orders to reload when sales reps are loaded
        this.loadOrders();
      })
    ).subscribe({
      error: (error) => {
        console.error('Failed to load sales reps:', error);
        this.snackbarService.showSnackBar('Failed to load sales reps.');
      }
    });
  }

  // Load orders when the sales rep changes or a filter is applied
  private setupOrdersListener(): void {
    this.form.get('salesPerson')!.valueChanges.subscribe(() => {
      this.loadOrders();
    });
  }

  // Fetch orders based on selected company and sales rep
  private loadOrders(): void {
    const company = this.form.get('company')!.value;
    const salesrep = this.form.get('salesPerson')!.value;

    if (!company || !salesrep) {
      return; // Exit if either company or sales rep is not selected
    }

    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    const apiUrl = `https://uat-pffc.onrender.com/api/companies/${company.id}/sales-reps/${salesrep.name}/orders?pastHours=72`;
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

  // Apply a filter based on customer name
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

  // Method to open dialog with order details on row click
  onRowClick(order: Orders): void {
    this.dialog.open(OrderDetailsDialogComponent, {
      data: order,
      width: '800px', // Set a wider dialog width to avoid scrollbars
    });
  }
  
}
