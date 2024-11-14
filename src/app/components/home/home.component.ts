import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  username: string | null = null;

  constructor(private router: Router) {
    this.username = localStorage.getItem('username') || sessionStorage.getItem('username');
  }

  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
  }

  logout(): void {
    localStorage.removeItem('authToken');
    sessionStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }
}
