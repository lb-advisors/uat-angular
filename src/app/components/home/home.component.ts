import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  username!: string | null;
  isHROpen: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.username = this.authService.getFullname();
  }

  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
    if (this.isHROpen) {
      this.isHROpen = false; // Close HR dropdown after navigation
    }
  }

  toggleHR(): void {
    this.isHROpen = !this.isHROpen;
  }

  // Optional: Close HR dropdown when clicking outside
  closeHR(): void {
    if (this.isHROpen) {
      this.isHROpen = false;
    }
  }

  logout(): void {
    this.authService.logout();
  }
}