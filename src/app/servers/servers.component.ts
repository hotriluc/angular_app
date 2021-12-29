import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowedNewServer: boolean = false;
  serverCreationStatus: string = '';
  serverCreated: boolean = false;
  serverName: string = '';
  username: string =  '';
  usernameButtonText: string = 'You can not click';
  servers = [];

  constructor() {
    setTimeout(() => {
      this.allowedNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = `Server has been created! Server name is ${this.serverName}`
    this.serverName = ''
  }

  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  isEmptyName() {
    if (this.username.length === 0) {
      return true;
    } else {
      this.usernameButtonText = 'You can click';
      return false;
    }
  }

  resetName() {
    this.username = "";
    this.usernameButtonText = "You can not click"
  }
}
