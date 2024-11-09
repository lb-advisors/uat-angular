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
  orders: Orders[] = []; // Array to hold the orders data
  filteredOrders: Orders[] = []; // Array to hold filtered orders data
  token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhcmV2Iiwicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJzYWxlc19yZXBfbmFtZSI6IkFyZXYgU2FsZXMiLCJpYXQiOjE3MzExMTEyOTgsImV4cCI6MTczMTM3MDQ5OH0.trzeFkMcPHJEgxcuvZ-pyb98WkLin-derblQCGCYqGM';

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private snackbarService: SnackbarService,
    private orderLinksService: OrderLinksService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      company: [],
      salesPerson: [],
      customerName: [''], // Customer Name filter control
    });

    // Load companies and set default to company_id = 3
    this.companies$ = this.orderLinksService.getCompanies().pipe(
      tap((companies) => {
        const defaultCompany = companies.find((company) => company.id === 3);
        if (defaultCompany) {
          this.form.get('company')!.setValue(defaultCompany);
        }
      }),
    );

    // Load salespersons for company and set default to sales_rep_name = 'Marcelo'
    this.form.get('company')!.valueChanges.pipe(
      switchMap((company) =>
        this.orderLinksService.getSalesPersons(company.id).pipe(
          tap((salesreps) => {
            salesreps.sort((a, b) => a.name.localeCompare(b.name));
            this.salesPersons$ = new Observable<SalesRep[]>((observer) => {
              observer.next(salesreps);
              observer.complete();
            });

            // Set default salesperson to 'Marcelo' if available
            const defaultSalesRep = salesreps.find((rep) => rep.name === 'Marcelo');
            if (defaultSalesRep) {
              this.form.get('salesPerson')!.setValue(defaultSalesRep);
            } else if (salesreps.length > 0) {
              this.form.get('salesPerson')!.setValue(salesreps[0]);
            }
          }),
        ),
      ),
    ).subscribe();

    // Fetch orders based on selected company and salesperson
    this.form.get('salesPerson')!.valueChanges.pipe(
      switchMap((salesrep) => {
        const company = this.form.get('company')!.value;
        const apiUrl = `https://uat-pffc.onrender.com/api/companies/${company.id}/sales-reps/${salesrep.name}/orders?pastHours=72`;

        // Set headers with the authorization token
        const headers = new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        });

        return this.http.get<Orders[]>(apiUrl, { headers });
      }),
      tap((orders) => {
        this.orders = orders;
        this.applyFilters(); // Apply initial filters
      })
    ).subscribe({
      error: (error) => {
        console.error('An error occurred:', error);
      }
    });

    // Listen for changes in the customer name filter
    this.form.get('customerName')!.valueChanges.subscribe(() => this.applyFilters());
  }

  // Method to filter orders based on customer name
  applyFilters(): void {
    const customerName = this.form.get('customerName')!.value?.toLowerCase() || '';
    this.filteredOrders = this.orders.filter(order => 
      order.customerName.toLowerCase().includes(customerName)
    );
    this.cdr.markForCheck();
  }
}
