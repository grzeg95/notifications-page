import {NgTemplateOutlet} from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {RouterLink} from '@angular/router';
import {EventContent, EventDate, EventOn, EventPerson, EventRead, EventToWhom, EventType} from '../../models/event';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [
    RouterLink,
    NgTemplateOutlet
  ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-notification d-flex flex-column rounded'
  }
})
export class NotificationComponent implements OnChanges {

  @Input({required: true}) read!: EventRead;
  @HostBinding('class.bg-secondary-subtle') unread = false;

  @Input({required: true}) person!: EventPerson;
  @Input({required: true}) type!: EventType;
  @Input({required: true}) on!: EventOn;
  @Input({required: true}) toWhom!: EventToWhom;
  @Input({required: true}) content!: EventContent;
  @Input({required: true}) date!: EventDate;

  constructor(
    private _cdr: ChangeDetectorRef
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if ('read' in changes) {
      const read: SimpleChange = changes['read'];
      this.unread = !read.currentValue;
      this._cdr.detectChanges();
    }
  }
}
