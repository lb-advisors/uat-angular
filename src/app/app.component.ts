import { Component } from '@angular/core';
import { isDevMode } from '@angular/core';
import { environment } from '../environments/environment';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [
        MatToolbar,
        RouterLink,
        RouterLinkActive,
        MatIcon,
        RouterOutlet,
    ],
})
export class AppComponent {
  title = 'driver-routes';
  isDevMode: boolean = isDevMode();
  env = environment;
}
