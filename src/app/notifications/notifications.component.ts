import {ChangeDetectionStrategy, Component, computed, signal, ViewEncapsulation} from '@angular/core';
import {Event} from '../models/event';
import {NotificationComponent} from './notification/notification.component';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    NotificationComponent
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-notifications d-flex flex-column bg-white m-auto'
  }
})
export class NotificationsComponent {

  notifications = signal<Event[]>([
    {
      read: false,
      person: {
        avatar: '/assets/images/avatar-mark-webber.webp',
        fullName: 'Mark Webber',
        link: ''
      },
      type: 'reaction',
      on: 'post',
      toWhom: 'you',
      content: {
        value: 'My first tournament today!',
        link: '/'
      },
      date: '1m ago'
    },
    {
      read: false,
      person: {
        avatar: '/assets/images/avatar-angela-gray.webp',
        fullName: 'Angela Gray',
        link: ''
      },
      type: 'follow',
      on: 'person',
      toWhom: 'you',
      content: null,
      date: '5m ago'
    },
    {
      read: false,
      person: {
        avatar: '/assets/images/avatar-jacob-thompson.webp',
        fullName: 'Jacob Thompson',
        link: ''
      },
      type: 'joined',
      on: 'group',
      toWhom: 'you',
      content: {
        value: 'Chess Club',
        link: '/'
      },
      date: '1 day ago'
    },
    {
      read: true,
      person: {
        avatar: '/assets/images/avatar-rizky-hasanuddin.webp',
        fullName: 'Rizky Hasanuddin',
        link: ''
      },
      type: 'message',
      on: 'person',
      toWhom: 'you',
      content: {
        value: 'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.',
        link: '/'
      },
      date: '5 days ago'
    },
    {
      read: true,
      person: {
        avatar: '/assets/images/avatar-kimberly-smith.webp',
        fullName: 'Kimberly Smith',
        link: ''
      },
      type: 'comment',
      on: 'picture',
      toWhom: 'you',
      content: {
        value: '/assets/images/image-chess.webp',
        link: '/'
      },
      date: '1 week ago'
    },
    {
      read: true,
      person: {
        avatar: '/assets/images/avatar-nathan-peterson.webp',
        fullName: 'Nathan Peterson',
        link: ''
      },
      type: 'reaction',
      on: 'post',
      toWhom: 'you',
      content: {
        value: '5 end-game strategies to increase your win rate',
        link: '/'
      },
      date: '2 weeks ago'
    },
    {
      read: true,
      person: {
        avatar: '/assets/images/avatar-anna-kim.webp',
        fullName: 'Anna Kim',
        link: ''
      },
      type: 'left',
      on: 'group',
      toWhom: null,
      content: {
        value: 'Chess Club',
        link: '/'
      },
      date: '2 weeks ago'
    },
  ]);

  unreadNotifications = computed(() => {
    return this.notifications().reduce((previousValue, notification) => previousValue + (notification.read ? 1 : 0), 0);
  })

  markAllAsRead() {
    this.notifications.update((notifications) => {
      notifications.forEach((notification) => notification.read = true);
      return notifications;
    });
  }
}
