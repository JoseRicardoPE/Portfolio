import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from "../../components/button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-introduction',
  imports: [ButtonComponent, CommonModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {
  greetingText: string = 'Hello my name is';
  fullName: string = 'Ricardo Pacheco';
  roleText: string = 'I am a Frontend Developer';
  introductionText: string = `I'm a passionate frontend developer with a knack for creating engaging and user-friendly web applications. With a strong foundation in HTML, CSS, and JavaScript, I specialize in crafting responsive designs that adapt seamlessly across devices. My expertise extends to popular frameworks like Angular, allowing me to build dynamic interfaces that enhance user experiences. I thrive on solving complex problems and am always eager to learn new technologies to stay at the forefront of the ever-evolving web development landscape.`;
  aboutMeButtonText: string = 'About Me';

  constructor(
    public router: Router,
  ) {}

  navigateToAboutMe() {
    this.router.navigate(['/about-me']);
  }
}
