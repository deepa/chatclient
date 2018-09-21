import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class WebSocketService {

    onMessage: Subject<any> = new Subject<any>();

    websocket;

    constructor() {
        this.connect();
    }

    connect() {
        this.websocket = new WebSocket('ws://localhost:4200/chat');
        this.websocket.onmessage = (message: MessageEvent) => {
            this.onMessage.next(message);
        };
    }

    send(message: string): void {
        this.websocket.send(message);
    }

}
