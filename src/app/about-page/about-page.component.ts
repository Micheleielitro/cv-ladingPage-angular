import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent {
  completedText =
    '<Hi , I am Michele , a Software Developer,If you have come this far sing means you would like to know a little more about me , well.I started about a year ago in the working environment , developing mainly with React.js, but every now and then under the eye of spiritual guidance I also do other things.In my spare time for example you can easily find me at the seashore fishing , or in the mountains relaxing. If Im not in either of those places,Im probably playing League of Legends😅 ./>';
  textToShow = '';
  textToShowLength = 0;

  constructor() {}

  ngOnInit(): void {
    interval(40).subscribe(() => {
      if (this.textToShowLength < this.completedText.length) {
        this.textToShow += this.completedText.charAt(this.textToShowLength);
        this.textToShowLength++;
      }
    });
  }
}
