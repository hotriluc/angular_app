import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html'
})

export class ServerComponent {

  server = {
    id : '10',
    status: 'Offline'
  };

  getServerStatus() {
    return this.server.status
  }

}
