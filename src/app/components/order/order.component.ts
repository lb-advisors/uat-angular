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

@Component({
  selector: 'app-order-list',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  salespeople: Salesperson[] = [];
  companies: string[] = ['PFF', 'FOG-RIVER'];
  selectedCompany: string = 'PFF'; // Default to PFF
  selectedSalesperson: string | null = 'John'; // Default to John
  customerSearch: string = ''; // Search term for customer names
  filteredSalespeople: Salesperson[] = [];
  filteredOrders: Order[] = [];
  imageSrc: string = 'assets/logo.png'; // Default image source
  imageBackgroundColor: string = 'rgba(0, 16, 46, 1)'; // Default background color

  companySalesRepMapping: { [key: string]: string[] } = {
    'PFF': ['Merhy', 'John'],
    'FOG-RIVER': ['SalesRep1', 'SalesRep2']
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchSalespeople();
  }

  fetchSalespeople(): void {
    this.http.get<Salesperson[]>('https://uat-pffc.onrender.com/api/sales-reps')
      .subscribe(data => {
        this.salespeople = data;
        this.filterSalesReps();
      }, error => {
        console.error('Error fetching salespeople:', error);
      });
  }

  fetchCustomerNames(): void {
    if (this.selectedSalesperson) {
      this.http.get<any[]>(`https://uat-pffc.onrender.com/api/sales-reps/${this.selectedSalesperson}/customers`)
        .subscribe(data => {
          this.orders = data.map(customer => ({
            SalesName: this.selectedSalesperson!,
            CustomerID: customer.id, // Use 'id' instead of 'customerId' as per the provided response
            CustomerName: customer.name // Use 'name' instead of 'customerName' as per the provided response
          }));
          this.filterOrders(); // Apply filter immediately to show default salesperson's customers
        }, error => {
          console.error('Error fetching customer names:', error);
        });
    }
  }

  filterSalesReps(): void {
    this.filteredSalespeople = this.salespeople.filter(salesperson =>
      this.companySalesRepMapping[this.selectedCompany].includes(salesperson.name)
    );
    if (!this.filteredSalespeople.find(salesperson => salesperson.name === this.selectedSalesperson)) {
      this.selectedSalesperson = this.filteredSalespeople.length > 0 ? this.filteredSalespeople[0].name : null;
    }
    this.updateImageAndBackground();
    this.fetchCustomerNames(); // Fetch customer names whenever the salesperson changes
  }

  updateImageAndBackground(): void {
    if (this.selectedCompany === 'FOG-RIVER') {
      this.imageSrc = 'assets/fogriver.png';
      this.imageBackgroundColor = '#000000'; // Black background
    } else if (this.selectedCompany === 'PFF') {
      this.imageSrc = 'assets/logo.png';
      this.imageBackgroundColor = 'rgba(0, 16, 46, 1)'; // Dark blue background
    }
  }

  filterOrders(): void {
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
