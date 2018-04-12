import { Component, ViewChild, ElementRef } from '@angular/core';
import { Content } from 'ionic-angular';

// 聊天程序
import { io } from 'socket.io';
declare let io;
@Component({
  selector: 'page-chatroom',
  templateUrl: 'chatroom.html',
})
export class ChatroomPage {

  constructor() {

  }
 
 socket = io();
 
}
