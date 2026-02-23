import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [ButtonComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  doNothing() {
    console.log('Nothing to see here!');
  }
}
