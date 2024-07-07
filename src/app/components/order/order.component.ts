import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

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

  hardcodedOrders: { customer_id: number, sales_rep_name: string }[] = [
    { customer_id: 4713, sales_rep_name: 'John' },
    { customer_id: 2030, sales_rep_name: 'Merhy' },
    { customer_id: 4287, sales_rep_name: 'John' },
    { customer_id: 9998, sales_rep_name: 'SalesRep2' },
    { customer_id: 4154, sales_rep_name: 'John' },
    { customer_id: 1, sales_rep_name: 'Your Sales Rep Name' },
    { customer_id: 4226, sales_rep_name: 'John' },
    { customer_id: 4729, sales_rep_name: 'John' },
    { customer_id: 4892, sales_rep_name: 'John' },
    { customer_id: 4896, sales_rep_name: 'John' },
    { customer_id: 4490, sales_rep_name: 'John' },
    { customer_id: 4681, sales_rep_name: 'John' },
    { customer_id: 751, sales_rep_name: 'John' },
    { customer_id: 4339, sales_rep_name: 'John' },
    { customer_id: 4484, sales_rep_name: 'John' },
    { customer_id: 4355, sales_rep_name: 'John' },
    { customer_id: 4199, sales_rep_name: 'John' },
    { customer_id: 3679, sales_rep_name: 'Merhy' },
    { customer_id: 846, sales_rep_name: 'John' },
    { customer_id: 4253, sales_rep_name: 'John' },
    { customer_id: 9999, sales_rep_name: 'SalesRep1' }
  ];

  companySalesRepMapping: { [key: string]: string[] } = {
    'PFF': ['Merhy', 'Your Sales Rep Name', 'John'],
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
        this.fetchCustomerNames();
      }, error => {
        console.error('Error fetching salespeople:', error);
      });
  }

  fetchCustomerNames(): void {
    const uniqueCustomerIDs = Array.from(new Set(this.hardcodedOrders.map(order => order.customer_id)));

    const customerRequests = uniqueCustomerIDs.map(customer_id =>
      this.http.get<any>(`https://uat-pffc.onrender.com/api/customers/${customer_id}/profiles`)
        .pipe(
          map(customerData => ({
            customer_id: customerData.customerId,
            customer_name: customerData.customerName
          }))
        )
    );

    forkJoin(customerRequests).subscribe(results => {
      this.orders = this.hardcodedOrders.map(order => {
        const customer = results.find(result => result.customer_id === order.customer_id);
        return {
          SalesName: order.sales_rep_name,
          CustomerID: order.customer_id,
          CustomerName: customer ? customer.customer_name : `Customer ${order.customer_id}`
        };
      });
      this.filterOrders(); // Apply filter immediately to show default salesperson's customers
    }, error => {
      console.error('Error fetching customer names:', error);
    });
  }

  filterSalesReps(): void {
    this.filteredSalespeople = this.salespeople.filter(salesperson =>
      this.companySalesRepMapping[this.selectedCompany].includes(salesperson.name)
    );
    if (!this.filteredSalespeople.find(salesperson => salesperson.name === this.selectedSalesperson)) {
      this.selectedSalesperson = this.filteredSalespeople.length > 0 ? this.filteredSalespeople[0].name : null;
    }
    this.updateImageAndBackground();
    this.filterOrders();
  }

  updateImageAndBackground(): void {
    if (this.selectedCompany === 'FOG-RIVER') {
      this.imageSrc = 'assets/fogriver.png';
      this.imageBackgroundColor = '#FFFFFF'; // White background
    } else if (this.selectedCompany === 'PFF') {
      this.imageSrc = 'assets/logo.png';
      this.imageBackgroundColor = 'rgba(0, 16, 46, 1)'; // Dark blue background
    }
  }

  filterOrders(): void {
    let filtered = this.orders.filter(order => order.SalesName === this.selectedSalesperson);
    if (this.customerSearch) {
      filtered = filtered.filter(order =>
        order.CustomerName.toLowerCase().includes(this.customerSearch.toLowerCase())
      );
    }
    this.filteredOrders = filtered;
    this.sortFilteredOrders();
  }

  sortFilteredOrders(): void {
    this.filteredOrders.sort((a, b) => a.CustomerName.localeCompare(b.CustomerName));
  }

  getOrderLink(customerID: number): string {
    return `/order-form?customerID=${customerID}`;
  }

  copyLink(link: string): void {
    navigator.clipboard.writeText(link).then(() => {
      alert('Link copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy link: ', err);
    });
  }
}
