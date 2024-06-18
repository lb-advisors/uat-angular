import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutComponent {}
