import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Order {
  SalesName: string;
  CustomerID: number;
  CustomerName: string;
}

interface Salesperson {
  name: string;
}

interface Company {
  id: number;
  name: string;
}

@Component({
  selector: 'app-order-list',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  salespeople: Salesperson[] = [];
  companies: Company[] = [];
  selectedCompany: Company | null = null; // Changed to hold Company object
  selectedSalesperson: string | null = 'John'; // Default to John
  customerSearch: string = ''; // Search term for customer names
  filteredSalespeople: Salesperson[] = [];
  filteredOrders: Order[] = [];
  imageSrc: string = 'assets/logo.png'; // Default image source
  imageBackgroundColor: string = 'rgba(0, 16, 46, 1)'; // Default background color

  previousSalesperson: string | null = null; // Track previous salesperson to detect changes
  previousCompany: Company | null = null; // Track previous company to detect changes

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCompanies();
  }

  fetchCompanies(): void {
    this.http.get<Company[]>('https://uat-pffc.onrender.com/api/companies')
      .subscribe(data => {
        this.companies = data;
        if (this.companies.length > 0) {
          this.selectedCompany = this.companies[0];
          this.filterSalesReps();
        }
      }, error => {
        console.error('Error fetching companies:', error);
      });
  }

  fetchSalespeople(companyId: number): void {
    this.http.get<Salesperson[]>(`https://uat-pffc.onrender.com/api/companies/${companyId}/sales-reps`)
      .subscribe(data => {
        this.salespeople = data;
        this.filterSalesReps();
      }, error => {
        console.error('Error fetching salespeople:', error);
      });
  }

  fetchCustomerNames(companyId: number, salesRepName: string): void {
    this.http.get<any[]>(`https://uat-pffc.onrender.com/api/companies/${companyId}/sales-reps/${salesRepName}/customers`)
      .subscribe(data => {
        this.orders = data.map(customer => ({
          SalesName: salesRepName,
          CustomerID: customer.id, // Use 'id' instead of 'customerId' as per the provided response
          CustomerName: customer.name // Use 'name' instead of 'customerName' as per the provided response
        }));
        this.filterOrders(); // Apply filter immediately to show default salesperson's customers
      }, error => {
        console.error('Error fetching customer names:', error);
      });
  }

  filterSalesReps(): void {
    if (this.selectedCompany && this.selectedCompany !== this.previousCompany) {
      this.previousCompany = this.selectedCompany;
      this.fetchSalespeople(this.selectedCompany.id); // Fetch salespeople for the selected company
    } else {
      this.filteredSalespeople = this.salespeople.filter(salesperson =>
        this.salespeople.includes(salesperson)
      );
      if (!this.filteredSalespeople.find(salesperson => salesperson.name === this.selectedSalesperson)) {
        this.selectedSalesperson = this.filteredSalespeople.length > 0 ? this.filteredSalespeople[0].name : null;
      }
      this.updateImageAndBackground();
      this.fetchCustomerNames(this.selectedCompany!.id, this.selectedSalesperson!); // Fetch customer names whenever the salesperson changes
    }
  }

  updateImageAndBackground(): void {
    if (this.selectedCompany?.name === 'FOG-RIVER') {
      this.imageSrc = 'assets/fogriver.png';
      this.imageBackgroundColor = '#000000'; // Black background
    } else if (this.selectedCompany?.name === 'PFF') {
      this.imageSrc = 'assets/logo.png';
      this.imageBackgroundColor = 'rgba(0, 16, 46, 1)'; // Dark blue background
    }
  }

  filterOrders(): void {
    if (this.selectedSalesperson !== this.previousSalesperson) {
      this.previousSalesperson = this.selectedSalesperson;
      this.fetchCustomerNames(this.selectedCompany!.id, this.selectedSalesperson!); // Fetch customer names whenever the salesperson changes
    }
    let filtered = this.orders;
    if (this.customerSearch) {
      filtered = filtered.filter(order =>
        order.CustomerName.toLowerCase().includes(this.customerSearch.toLowerCase())
      );
    }
    this.filteredOrders = filtered;
    this.sortFilteredOrders();
  }

  sortFilteredOrders(): void {
    this.filteredOrders.sort((a, b) => (a.CustomerName || '').localeCompare(b.CustomerName || ''));
  }

  getOrderLink(customerID: number, company: string): string {
    return `/order-form?customerID=${customerID}&company=${company}`;
  }

  copyLink(customerID: number, company: string): void {
    const link = this.getOrderLink(customerID, company);
    navigator.clipboard.writeText(link).then(() => {
      alert('Link copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy link: ', err);
    });
  }
}
