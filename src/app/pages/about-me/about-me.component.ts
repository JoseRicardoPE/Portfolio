import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  imports: [ButtonComponent, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  sectionTitle: string = 'About Me';
  introductionText: string = 'Learn more';
  aboutMeParagraph1: string = `I'm a passionate frontend developer with a knack for creating engaging and user-friendly web applications. With a strong foundation in HTML, CSS, and JavaScript, I specialize in crafting responsive designs that adapt seamlessly across devices. My expertise extends to popular frameworks like Angular, allowing me to build dynamic interfaces that enhance user experiences. I thrive on solving complex problems and am always eager to learn new technologies to stay at the forefront of the ever-evolving web development landscape.`;
  aboutMeParagraph2: string = `In addition to my technical skills, I am a collaborative team player who values open communication and continuous learning. I enjoy working in fast-paced environments where I can contribute my creativity and problem-solving abilities to deliver high-quality web applications. Whether it's building a sleek user interface or optimizing performance, I am dedicated to creating exceptional digital experiences that leave a lasting impact.`;
  aboutMeParagraph3: string = `When I'm not coding, you can find me exploring the latest trends in web development, attending tech meetups, or contributing to open-source projects. I am always eager to connect with fellow developers and share knowledge, so feel free to reach out if you'd like to collaborate or discuss anything related to frontend development!`;
  buttonText: string = 'View Portfolio';

  constructor(
    public router: Router,
  ) { }

  navigate(): void {
    this.router.navigate(['/portfolio']);
  }

}
