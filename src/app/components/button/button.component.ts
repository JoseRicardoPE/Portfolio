import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() buttonText: string = '';
  @Input() buttonAction: () => void = () => {};

  onClick(): void {
    this.buttonAction();
  }
}
