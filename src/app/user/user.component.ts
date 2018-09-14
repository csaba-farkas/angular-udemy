import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userName = 'Cool User';
  constructor() { }

  ngOnInit() {
  }

}
