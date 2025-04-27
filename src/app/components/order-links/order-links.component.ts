import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, forkJoin, map, switchMap, tap } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { Company } from 'src/app/models/company.model';
import { Customer } from 'src/app/models/customer.model';
import { SalesRep } from 'src/app/models/sales-rep.model';
import { OrderLinksService } from 'src/app/services/order-links.service';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';

// Extended interfaces to include additional properties
interface EnhancedCustomer extends Customer {
  companyName: string;
}

interface EnhancedSalesRep extends SalesRep {
  companyId: number;
}

@Component({
  standalone: true,
  selector: 'app-order-links',
  templateUrl: './order-links.component.html',
  styleUrls: ['./order-links.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, LogoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderLinksComponent implements OnInit {
  form!: FormGroup;
  companies: Company[] = [];
  salesPersons$!: Observable<EnhancedSalesRep[]>;
  customers: EnhancedCustomer[] = [];
  filteredCustomers: EnhancedCustomer[] = [];
  allSalesPersons: EnhancedSalesRep[] = [];

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private snackbarService: SnackbarService,
    private orderLinksService: OrderLinksService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      salesPerson: [],
      searchText: '',
    });

    // Load all companies
    this.orderLinksService.getCompanies().subscribe(companies => {
      this.companies = companies;
      
      // Load sales persons for all companies
      const salesPersonsObservables = this.companies.map(company => 
        this.orderLinksService.getSalesPersons(company.id).pipe(
          map(salesReps => salesReps.map(rep => ({...rep, companyId: company.id} as EnhancedSalesRep)))
        )
      );
      
      forkJoin(salesPersonsObservables).subscribe(salesPersonsArrays => {
        // Flatten the array of arrays and sort
        this.allSalesPersons = salesPersonsArrays.flat()
          .sort((a, b) => a.name.localeCompare(b.name));
        
        // Set the salesPersons$ observable
        this.salesPersons$ = new Observable<EnhancedSalesRep[]>((observer) => {
          observer.next(this.allSalesPersons);
          observer.complete();
        });
        
        // Set default sales person if available
        if (this.allSalesPersons.length > 0) {
          this.form.get('salesPerson')!.setValue(this.allSalesPersons[0]);
        }
        
        this.cdr.markForCheck();
      });
    });

    // Load customers based on selected salesperson
    this.form.get('salesPerson')!.valueChanges.pipe(
      switchMap((salesrep: EnhancedSalesRep) => {
        const companyId = salesrep.companyId;
        const companyName = this.companies.find(c => c.id === companyId)?.name || '';
        
        return this.orderLinksService.getCustomers(companyId, salesrep.name).pipe(
          map(customers => 
            customers.map(customer => ({
              ...customer,
              companyName
            } as EnhancedCustomer))
          )
        );
      }),
    ).subscribe({
      next: (customers) => {
        this.customers = [...customers];
        this.customers.sort((a, b) => a.name.localeCompare(b.name));
        this.filteredCustomers = [...this.customers];
        this.cdr.markForCheck();
      },
    });

    // Apply search filter on customer names
    this.form.get('searchText')!.valueChanges.subscribe((searchText: string) => {
      this.filteredCustomers = this.customers.filter((customer) => 
        customer.name.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  }

  // Generate Order Link
  generateLink(customerId: number): string {
    const baseUrl = window.location.href.replace('/order-links', '');
    return `${baseUrl}/customer/${customerId}/order-form`;
  }

  // Copy Order Link to Clipboard
  copyLink(customerId: number): void {
    const link = this.generateLink(customerId);
    navigator.clipboard
      .writeText(link)
      .then(() => {
        this.snackbarService.showSuccess('Link copied to clipboard!');
      })
      .catch((err) => {
        this.snackbarService.showError('Failed to copy link: ', err);
        console.error('Failed to copy link: ', err);
      });
  }
}