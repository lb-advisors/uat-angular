import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, tap } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { Company } from 'src/app/models/company.model';
import { Customer } from 'src/app/models/customer.model';
import { SalesRep } from 'src/app/models/sales-rep.model 3';
import { OrderLinksService } from 'src/app/services/order-links.service';

@Component({
  selector: 'app-order-links',
  templateUrl: './order-links.component.html',
  styleUrls: ['./order-links.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      company: [],
      salesPerson: [],
      searchText: '',
    });

    this.companies$ = this.orderLinksService.getCompanies().pipe(
      tap((companies) => {
        if (companies.length > 0) {
          this.form.get('company')!.setValue(companies[0]);
        }
      }),
    );

    // company change
    this.salesPersons$ = this.form.get('company')!.valueChanges.pipe(
      switchMap((company) =>
        this.orderLinksService.getSalesPersons(company.id).pipe(
          tap((salesreps) => {
            if (salesreps.length > 0) {
              this.form.get('salesPerson')!.setValue(salesreps[0]);
            }
          }),
        ),
      ),
    );

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
        next: (customsers) => {
          this.customers = [...customsers];
          this.filteredCustomers = [...customsers];
          this.cdr.markForCheck();
        },
      });

    // searchText change
    this.form
      .get('searchText')!
      .valueChanges.subscribe((searchText: string) => {
        this.filteredCustomers = [
          ...this.customers.filter((customer) =>
            customer.name.toLowerCase().includes(searchText.toLowerCase()),
          ),
        ];
      });
  }

  updateImageAndBackground(): void {
    const company = this.form.get('company')!.value;
    if (company.name === 'FOG-RIVER') {
      this.imageSrc = 'assets/fogriver.png';
      this.imageBackgroundColor = '#000000'; // Black background
    } else {
      this.imageSrc = 'assets/logo.png';
      this.imageBackgroundColor = 'rgba(0, 16, 46, 1)'; // Dark blue background
    }
  }

  generateLink(customerId: number): string {
    const companyId = this.form.get('company')!.value.id;
    return `/order-form?customerID=${customerId}&company=${companyId}`;
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
