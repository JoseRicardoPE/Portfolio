import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-contact',
  imports: [ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  phoneNumber: string = '+1234567890';
  email = 'contact@example.com';
  doNothing() {
    console.log('Button clicked, but no action is defined.');
  }
}
