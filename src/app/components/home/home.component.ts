import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Employee {
  name: string;
  status: 'sick' | 'vacation' | 'onsite';
}

interface Item {
  description: string;
  status: 'low' | 'none';
  ordered: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  today: Date = new Date();
  employees: Employee[] = [
    { name: 'Miguel Rodriguez', status: 'onsite' },
    { name: 'Maria Lopez', status: 'sick' },
    { name: 'Michael Johnson', status: 'vacation' },
    { name: 'Arev Sarkisian', status: 'onsite' },
    { name: 'Narek Petrosian', status: 'onsite' },
    { name: 'Lilit Avetisyan', status: 'onsite' },
    { name: 'Anahit Hovhannisyan', status: 'onsite' },
    { name: 'David Martirosyan', status: 'onsite' },
    { name: 'Armen Harutyunyan', status: 'sick' },
    { name: 'Karen Avanesyan', status: 'vacation' }
  ];

  items: Item[] = [
    { description: 'Marinated Anchovies Fresh 2.2#', status: 'none', ordered: true },
    { description: 'Octopus Spanish 6-8 Whole Raw Frozen', status: 'none', ordered: true },
    { description: 'Clam Whole Cooked Frozen', status: 'none', ordered: true },
    { description: 'PRODUCE KAIWARE (RADISH-SPROUTS)', status: 'none', ordered: true },
    { description: 'PRODUCE OHBA (PERILLA-LEAVES)', status: 'none', ordered: true },
    { description: 'Cold-Smoked Salmon Fillet Sliced With-Skin Deluxe *NOIR*', status: 'none', ordered: false },
    { description: 'ALBACORE SUSHI LOIN FROZEN', status: 'low', ordered: false },
    { description: 'LOBSTER MEAT CK (CLAW / KNUCKLE) FROZEN', status: 'low', ordered: false },
    { description: 'OYSTER FAT BASTARD LIVE', status: 'low', ordered: false },
    { description: 'Salmon Atlantic Fillet Fresh 2-3 E-Trim Skin-Off 10lb', status: 'low', ordered: false }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.sortEmployees();
    this.sortItems();
  }

  sortEmployees(): void {
    this.employees.sort((a, b) => {
      const statusOrder = { 'sick': 0, 'vacation': 1, 'onsite': 2 };
      return statusOrder[a.status] - statusOrder[b.status];
    });
  }

  sortItems(): void {
    this.items.sort((a, b) => {
      const statusOrder = { 'none': 0, 'low': 1 };
      return statusOrder[a.status] - statusOrder[b.status];
    });
  }

  getStatusIcon(status: string): string {
    switch(status) {
      case 'sick':
      case 'vacation':
      case 'onsite':
      case 'low':
      case 'none':
        return 'circle';
      default:
        return '';
    }
  }

  getStatusColor(status: string): string {
    switch(status) {
      case 'sick':
        return 'red';
      case 'vacation':
      case 'low':
        return 'orange';
      case 'onsite':
      case 'ordered':
        return 'green';
      case 'none':
        return 'red';
      default:
        return '';
    }
  }

  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
  }
}
