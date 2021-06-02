import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from '../service/models';
import { WebsocketService } from '../service/websocket.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
})
export class ChatRoomComponent implements OnInit {
  username: string = '';
  message: string = '';
  // messages: string[] = [];
  messages: Message[] = [];

  constructor(
    private webSocket: WebsocketService,
    private _formBuilder: FormBuilder
  ) {}

  form: FormGroup = this._formBuilder.group({
    username: ['', Validators.required],
  });

  form2: FormGroup = this._formBuilder.group({
    message: ['', Validators.required],
  });

  ngOnInit(): void {}

  connect() {
    this.webSocket.connect(this.username);
    this.webSocket.newMessages.subscribe((newMessage) => {
      this.messages.push(newMessage);
    });
  }

  sendMessage() {
    // this.webSocket.myWebSocket.next(this.username + ':' + this.message);
    this.webSocket.myWebSocket.next({
      userName: this.username,
      message: this.message,
    });
    this.message = '';
  }
}
