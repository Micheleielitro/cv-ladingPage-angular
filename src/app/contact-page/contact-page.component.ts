import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {
  technologies = [
    { name: 'HTML', knowledge: '80%' },
    { name: 'SCSS', knowledge: '80%' },
    { name: 'CSS', knowledge: '80%' },
    { name: 'JavaScript', knowledge: '50%' },
    { name: 'TypeScript', knowledge: '50%' },
    { name: 'Angular', knowledge: '40%' },
    { name: 'React.js', knowledge: '50%' },
    { name: 'Umbraco', knowledge: '70%' },
    { name: 'AEM', knowledge: '60%' },
    { name: 'Python', knowledge: '30%' },
    { name: 'WordPress', knowledge: '70%' },
    { name: 'Elementor', knowledge: '70%' },
  ];
}
