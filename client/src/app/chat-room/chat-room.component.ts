import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebsocketService } from '../service/websocket.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
})
export class ChatRoomComponent implements OnInit {
  username: string = '';
  message: string = '';

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
  }

  sendMessage() {
    this.webSocket.myWebSocket.sendData(this.username + ':' + this.message);
    // this.webSocket.sendMessage(this.username + ':' + this.message);
    this.message = '';
  }
}
