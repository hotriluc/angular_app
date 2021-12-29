import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styleUrls: ['server.component.scss']
})

export class ServerComponent {

  serverId: string;
  serverStatus: string;
  @Input() serverName: string;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';

  }

  getServerStatus() {
    return this.serverStatus
  }

  getColor() {
    return this.serverStatus === 'offline' ? 'red' : 'green'
  }

}
