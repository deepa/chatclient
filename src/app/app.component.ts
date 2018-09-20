import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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

  constructor(public websocketService: WebSocketService) {
    
    websocketService.onMessage.subscribe((message) => {
      this.messages.push(JSON.parse(message.data));
    });
    
  }

  sendMessage() {
    this.websocketService.send('{"username":"' + this.username + '","content":"' + this.message + '"}');
    this.message = '';
  }

  sendUsername() {
    this.websocketService.send('{"username":"' + this.username + '","content":"JOIN"}');
    this.isUserSet = true;
  }
}
