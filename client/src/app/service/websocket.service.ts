import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Message } from './models';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  urlHost = '127.0.0.1'; //local host
  // urlHost = '192.168.1.27'; //local host
  urlPort = '7777';
  urlProtocol = 'ws';

  url =
    this.urlProtocol + '://' + this.urlHost + ':' + this.urlPort + '/ws/chat';

  constructor() {}

  myWebSocket: any = null;

  // newMessages = new Subject<string>();
  newMessages = new Subject<Message>();

  // newMessagesRecived = this.newMessages.asObservable();

  public connect(username: string): void {
    this.myWebSocket = webSocket(this.url + '/' + username);
    this.myWebSocket.asObservable().subscribe(
      (newMessage: Message) => {
        console.log(newMessage);
        this.newMessages.next(newMessage);
      },
      (err: any) => {
        this.connect(username);
      },
      () => {}
    );
  }

  public discounect() {
    this.myWebSocket.complete();
  }

  public sendMessage(message: string) {
    this.myWebSocket.next(message);
  }
}
