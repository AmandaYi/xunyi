import { Component, ViewChild, ElementRef, Renderer, Output, OnInit, EventEmitter } from '@angular/core';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import * as io from 'socket.io-client';

@Component({
  selector: 'send-input',
  templateUrl: 'send-input.html'
})
export class SendInputComponent implements OnInit {

  constructor(public renderer: Renderer,
    public apiService: ApiServiceProvider) {

  }
  public socket;
  // 得到全部的聊天信息历史记录
  messages = [];
  @Output() getMessagesOutPut = new EventEmitter();
  // 子组件主动发送数据


  selfWords: string = "亲爱的";
  // 改变文本框的高度
  // 获取文本框
  // @ViewChild("textarea") textarea: ElementRef;

  // changeHeight(event) {
  //   // setTimeout(this.setHeight(),500); 
  // }

  // 设置文本框高度
  // setHeight() {
  //   this.renderer.setElementStyle(this.textarea.nativeElement,
  //     "height",this.textarea.nativeElement.scrollHeight+"px");
  // }

  // 发送信息
  submit() {

    this.socket = io('http://localhost:3000')

    // 进入房间
    const param = {
      userId: localStorage.getItem("userId"),
      msg: this.selfWords
    }
    // this.socket.emit('join-room', infoObj)
    // this.socket.on('join-room', (joinInfo) => {
    //   this.MsgList.push(joinInfo)
    //   this.$nextTick(() => {
    //     this.msgDOM.scrollTop = this.msgDOM.scrollHeight
    //   })
    // })
    // 聊天
    this.socket.on('chat-msg', (param) => {
      console.log(param)
 
    })
    // 离开房间
    // this.socket.on('leave-room', (leaveInfo) => {
    //   this.MsgList.push(leaveInfo)
    //   this.$nextTick(() => {
    //     this.msgDOM.scrollTop = this.msgDOM.scrollHeight
    //   })
    // })
  }

  ngOnInit() { }



}
