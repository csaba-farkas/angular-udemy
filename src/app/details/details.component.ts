import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  displayContent = false;
  buttonClicks = [];
  counter = 0;
  constructor() { }

  ngOnInit() {
  }

  onButtonClick(event: Event) {
    this.displayContent = !this.displayContent;
    this.counter++;
    this.buttonClicks.push(`${this.counter}`);
  }

  getBackGroundColor(counter) {
    if (counter > 4) {
      return 'blue';
    }
  }

  getClass(counter) {
    if (counter > 4) {
      return true;
    }
  }
}
