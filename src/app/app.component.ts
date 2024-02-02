import {Component} from '@angular/core';
import {NotificationsComponent} from './notifications/notifications.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NotificationsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
