import { Component, OnInit } from '@angular/core';

interface Order {
  SalesName: string;
  CellNumber: string;
  CustomerID: number;
  CustomerName: string;
}

@Component({
  selector: 'app-order-list',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [
    { SalesName: 'John', CellNumber: '2139220173', CustomerID: 4355, CustomerName: 'SAVORE CUISINE & EVENTS' },
    { SalesName: 'John', CellNumber: '2139220173', CustomerID: 4490, CustomerName: 'THE LONELY OYSTER' },
    { SalesName: 'John', CellNumber: '2139220173', CustomerID: 4199, CustomerName: 'GOURMET FOOD SOLUTIONS' },
    { SalesName: 'John', CellNumber: '2139220173', CustomerID: 4154, CustomerName: 'DE LA NONNA' },
    { SalesName: 'John', CellNumber: '2139220173', CustomerID: 4339, CustomerName: 'AMANTE' },
    { SalesName: 'Merhy', CellNumber: '8184145485', CustomerID: 3679, CustomerName: 'CAROUSEL RESTAURANT' },
    { SalesName: 'John', CellNumber: '2139220173', CustomerID: 4484, CustomerName: 'PHORAGE' },
    { SalesName: 'John', CellNumber: '2139220173', CustomerID: 751, CustomerName: 'CHARCOAL RESTAURANT-VENICE' },
    { SalesName: 'John', CellNumber: '2139220173', CustomerID: 4253, CustomerName: 'DACSU LLC' },
    { SalesName: 'John', CellNumber: '2139220173', CustomerID: 4713, CustomerName: 'FENNEL KITCHEN & BAR' },
    { SalesName: 'John', CellNumber: '2139220173', CustomerID: 4681, CustomerName: 'TOPANGA SOCIAL' },
    { SalesName: 'Merhy', CellNumber: '8184145485', CustomerID: 2030, CustomerName: 'CAROUSEL / NAIRI' },
    { SalesName: 'John', CellNumber: '2139220173', CustomerID: 4729, CustomerName: 'MARINA - PASADENA' },
    { SalesName: 'John', CellNumber: '2139220173', CustomerID: 4892, CustomerName: 'THE COPPER KEY' },
    { SalesName: 'John', CellNumber: '2139220173', CustomerID: 4226, CustomerName: 'RAPPAHANNOCK OYSTER BAR' },
    { SalesName: 'John', CellNumber: '2139220173', CustomerID: 4896, CustomerName: 'KAKKOI SUSHI' },
    { SalesName: 'John', CellNumber: '2139220173', CustomerID: 4287, CustomerName: 'GO TRUCKS CATERING' },
    { SalesName: 'John', CellNumber: '2139220173', CustomerID: 4617, CustomerName: 'ZA ZA ZA' },
    { SalesName: 'Merhy', CellNumber: '8184145485', CustomerID: 4700, CustomerName: 'BUI SUSHI' },
    { SalesName: 'Merhy', CellNumber: '8184145485', CustomerID: 907, CustomerName: 'D&K FOODS' },
    { SalesName: 'John', CellNumber: '2139220173', CustomerID: 846, CustomerName: 'REPUBLIQUE BAKERY' },
    { SalesName: 'John', CellNumber: '2139220173', CustomerID: 4839, CustomerName: 'SHORT STORIES HOTEL' },
    { SalesName: 'John', CellNumber: '2139220173', CustomerID: 4540, CustomerName: 'TRUFFLE BROTHERS' },
    { SalesName: 'Marcelo', CellNumber: '2132764132', CustomerID: 4985, CustomerName: '21 OCEAN FRONT - NEWPORT BEACH' },
    { SalesName: 'Marcelo', CellNumber: '2132764132', CustomerID: 4986, CustomerName: '401K SINNERS & SAINTS - VENICE' },
    { SalesName: 'Marcelo', CellNumber: '2132764132', CustomerID: 5031, CustomerName: 'FRIDA CANTINA - BEVERLY HILLS' },
    { SalesName: 'Marcelo', CellNumber: '2132764132', CustomerID: 5036, CustomerName: 'GUILLERMOS RESTAURANT - PALM DESERT' },
    { SalesName: 'Merhy', CellNumber: '8184145485', CustomerID: 3681, CustomerName: 'ALCOVE CAFÉ' },
    { SalesName: 'Merhy', CellNumber: '8184145485', CustomerID: 4210, CustomerName: 'FAIRMONT MIRAMAR- HOTEL & BUNGALOWS' },
    { SalesName: 'John', CellNumber: '2139220173', CustomerID: 4178, CustomerName: 'POKE BAR - DOWNTOWN LA' },
    { SalesName: 'John', CellNumber: '2139220173', CustomerID: 4336, CustomerName: 'SALT & OLIVE - GLENDALE' },
    { SalesName: 'John', CellNumber: '2139220173', CustomerID: 3735, CustomerName: 'LA CHA CHA CHA' },
    { SalesName: 'John', CellNumber: '2139220173', CustomerID: 4353, CustomerName: 'THE BUTTERED RADISH' },
    { SalesName: 'John', CellNumber: '2139220173', CustomerID: 4815, CustomerName: 'PHO ALLEY' },
    // Add more order data here
  ];

  salespeople: { name: string, cell: string }[] = [];
  selectedSalesperson: string | null = null; // Initialize with null
  filteredOrders: Order[] = [];

  ngOnInit(): void {
    this.salespeople = Array.from(
      new Map(this.orders.map(order => [order.SalesName, { name: order.SalesName, cell: order.CellNumber }])).values()
    );

    this.filteredOrders = this.orders;
    this.sortFilteredOrders();
  }

  filterOrders(): void {
    if (this.selectedSalesperson) {
      this.filteredOrders = this.orders.filter(order => order.SalesName === this.selectedSalesperson);
    } else {
      this.filteredOrders = this.orders;
    }
    this.sortFilteredOrders();
  }

  sortFilteredOrders(): void {
    this.filteredOrders.sort((a, b) => a.CustomerName.localeCompare(b.CustomerName));
  }

  getOrderLink(customerID: number): string {
    return `http://example.com/order/${customerID}`; // Adjust the URL as necessary
  }

  copyLink(link: string): void {
    navigator.clipboard.writeText(link).then(() => {
      alert('Link copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy link: ', err);
    });
  }
}
