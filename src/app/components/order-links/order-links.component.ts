import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, tap } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { Company } from 'src/app/models/company.model';
import { Customer } from 'src/app/models/customer.model';
import { SalesRep } from 'src/app/models/sales-rep.model';
import { OrderLinksService } from 'src/app/services/order-links.service';
import { NgStyle, NgFor, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-order-links',
  templateUrl: './order-links.component.html',
  styleUrls: ['./order-links.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule, NgStyle, NgFor, AsyncPipe],
})
export class OrderLinksComponent implements OnInit {
  form!: FormGroup;

  imageSrc: string = 'assets/logo.png'; // Default image source
  imageBackgroundColor: string = 'rgba(0, 16, 46, 1)'; // Default background color

  companies$!: Observable<Company[]>;
  salesPersons$!: Observable<SalesRep[]>;

  customers: Customer[] = [];
  filteredCustomers: Customer[] = [];

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private snackbarService: SnackbarService,
    private orderLinksService: OrderLinksService,
    private router: Router, // Add the Router here
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      company: [],
      salesPerson: [],
      searchText: '',
    });

    this.companies$ = this.orderLinksService.getCompanies().pipe(
      tap((companies) => {
        // Set default company to "PFF"
        const defaultCompany = companies.find(
          (company) => company.name === 'PFF',
        );
        if (defaultCompany) {
          this.form.get('company')!.setValue(defaultCompany);
        }
      }),
    );

    // company change
    this.form
      .get('company')!
      .valueChanges.pipe(
        tap((company) => {
          this.updateImageAndBackground(company.name);
        }),
        switchMap((company) => {
          return this.orderLinksService.getSalesPersons(company.id).pipe(
            tap((salesreps) => {
              // Sort sales reps in ascending order
              salesreps.sort((a, b) => a.name.localeCompare(b.name));
              this.salesPersons$ = new Observable<SalesRep[]>((observer) => {
                observer.next(salesreps);
                observer.complete();
              });
              if (salesreps.length > 0) {
                this.form.get('salesPerson')!.setValue(salesreps[0]);
              }
            }),
          );
        }),
      )
      .subscribe();

    // salesPerson change
    this.form
      .get('salesPerson')!
      .valueChanges.pipe(
        switchMap((salesrep) => {
          const company = this.form.get('company')!.value;
          return this.orderLinksService.getCustomers(company.id, salesrep.name);
        }),
      )
      .subscribe({
        next: (customers) => {
          this.customers = [...customers];
          // Sort customers by name in ascending order
          this.customers.sort((a, b) => a.name.localeCompare(b.name));
          this.filteredCustomers = [...this.customers];
          this.cdr.markForCheck();
        },
      });

    // searchText change
    this.form
      .get('searchText')!
      .valueChanges.subscribe((searchText: string) => {
        this.filteredCustomers = this.customers.filter((customer) =>
          customer.name.toLowerCase().includes(searchText.toLowerCase()),
        );
      });
  }

  updateImageAndBackground(companyName: string): void {
    if (companyName === 'FOG-RIVER') {
      this.imageSrc = 'assets/fogriver.png';
      this.imageBackgroundColor = '#000000'; // Black background
    } else {
      this.imageSrc = 'assets/logo.png';
      this.imageBackgroundColor = 'rgba(0, 16, 46, 1)'; // Dark blue background
    }
  }

  generateLink(customerId: number): string {
    const company = this.form.get('company')!.value;
    const companyId = company.id;
    const companyName = company.name;
    let imageUrl = 'assets/logo.png';

    if (companyName === 'FOG-RIVER') {
      imageUrl = 'assets/fogriver.png';
    }

    const baseUrl = window.location.origin;

    return `${baseUrl}/order-form?customerID=${customerId}&company=${companyId}&image=${encodeURIComponent(
      imageUrl,
    )}`;
  }

  navigateToOrderForm(customerId: number): void {
    const link = this.generateLink(customerId);
    this.router.navigateByUrl(link);
  }

  copyLink(customerId: number): void {
    const link = this.generateLink(customerId);
    navigator.clipboard
      .writeText(link)
      .then(() => {
        this.snackbarService.showSnackBar('Link copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy link: ', err);
      });
  }
}
