import { ChangeDetectionStrategy, Component, OnInit, Inject } from '@angular/core';
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
  isOtherOpen: boolean = false;
  // Removed isSalesOpen property since we no longer need it

  constructor(
    @Inject(Router) private router: Router,
    @Inject(AuthService) private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.username = this.authService.getFullname();
  }

  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
    // Close all dropdowns after navigation
    this.isHROpen = false;
    this.isOtherOpen = false;
  }

  toggleHR(): void {
    this.isHROpen = !this.isHROpen;
    // Close other dropdowns when opening HR
    if (this.isHROpen) {
      this.isOtherOpen = false;
    }
  }

  // Removed toggleSales() method since we no longer need it

  // Method for Other dropdown
  toggleOther(): void {
    this.isOtherOpen = !this.isOtherOpen;
    // Close other dropdowns when opening Other
    if (this.isOtherOpen) {
      this.isHROpen = false;
    }
  }

  logout(): void {
    this.authService.logout();
  }
}