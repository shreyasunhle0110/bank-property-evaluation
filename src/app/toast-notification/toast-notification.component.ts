import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.css']
})
export class ToastNotificationComponent {
  @Input() message!: string;
  @Input() type: string = 'success'; // Default type is success
  showMessage: boolean = false;

  show() {
    this.showMessage = true;
    setTimeout(() => {
      this.hide();
    }, 3000); // Hide after 3 seconds
  }

  hide() {
    this.showMessage = false;
  }
}
