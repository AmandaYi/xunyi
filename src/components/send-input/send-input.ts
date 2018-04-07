import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';




@Component({
  selector: 'send-input',
  templateUrl: 'send-input.html'
})
export class SendInputComponent {
 
  constructor(private renderer: Renderer) {

  }
 
  selfWords: string = "亲爱的";
  // 改变文本框的高度
  // 获取文本框
  @ViewChild("textarea") textarea: ElementRef;
  
  changeHeight(event) {
    setTimeout(this.setHeight(),500); 
  }
 
  // 设置文本框高度
  setHeight() {
    this.renderer.setElementStyle(this.textarea.nativeElement,
      "height",this.textarea.nativeElement.scrollHeight+"px");
  }

  // 发送内容
  submit(){
    console.log(this.selfWords);
    
  }

 
}
