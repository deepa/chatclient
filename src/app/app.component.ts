import { Component } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  messages: string[] = [];

  username = '';

  message = '';

  isUserSet = false;

  constructor(public webSocketService: WebSocketService) {
    webSocketService.onMessage.subscribe((message) => {
      this.messages.push(JSON.parse(message.data));
    });
  }

  sendMessage() {
    this.webSocketService.send('{"username":"' + this.username + '","content":"' + this.message + '"}');
    this.message = '';
  }

  sendUsername() {
    this.webSocketService.send('{"username":"' + this.username + '","content":"JOIN"}');
    this.isUserSet = true;
  }
}
