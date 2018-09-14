import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No servers were created!';
  serverName = 'Testserver';
  serverCreated = false;

  constructor() {
      setTimeout(() => { this.allowNewServer = true; }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
      this.serverCreated = true;
      this.serverCreationStatus = `Server was created with name ${this.serverName}`;
  }

  onUpdateServerName(event: Event) {
    console.log((<HTMLInputElement> event.target).value);
    this.serverName = (<HTMLInputElement> event.target).value;
  }

}
