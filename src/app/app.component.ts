import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { isDevMode } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, MatToolbar, RouterLink, RouterLinkActive, MatIcon, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  isDevMode: boolean = isDevMode();
  apiUrl = environment.apiUrl;
  showWarning = false;
  isOrderForm: boolean = false;

  constructor(private router: Router) {
    // check that UAT is not using the prod backend
    if (this.isDevMode && this.apiUrl.includes('prod')) {
      this.showWarning = true;
      alert('WARNING: Angular is in Dev mode but connected to production !!!');
    }
  }

  ngOnInit(): void {
    // check if we are on the order form
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects;
        this.isOrderForm = currentRoute.includes('order-') && !currentRoute.includes('order-links');
      }
    });
  }
}
