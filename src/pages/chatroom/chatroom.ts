import { Component, ViewChild, ElementRef, Output, Input } from '@angular/core';
import { Content } from 'ionic-angular';

// 聊天程序
import { io } from 'socket.io-client';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
declare let io;
@Component({
  selector: 'page-chatroom',
  templateUrl: 'chatroom.html',
})
export class ChatroomPage {

  @Input() messages
  constructor(
    private apiService:ApiServiceProvider
  ) {

  }
 
  
 
 
}
