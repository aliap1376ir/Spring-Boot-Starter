import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  urlHost = '192.168.1.27'; //local host
  urlPort = '7777';
  urlProtocol = 'ws';

  url =
    this.urlProtocol + '://' + this.urlHost + ':' + this.urlPort + '/ws/chat';

  constructor() {}

  myWebSocket: any = null;

  private newMessages = new Subject<String>();

  // newMessagesRecived = this.newMessages.asObservable();

  public connect(username: string): void {
    this.myWebSocket = webSocket(this.url + '/' + username);
    this.myWebSocket.asObservable().subscribe(
      (newMessage: any) => {
        console.log(newMessage);
        this.newMessages.next(newMessage);
      },
      (err: any) => {
        this.connect(username);
      },
      () => {}
    );
    // this.myWebSocket.next({ message: 'some message' });
  }

  public discounect() {
    this.myWebSocket.complete();
  }

  public sendMessage(message: string) {
    this.myWebSocket.sendData(message);
  }
}
