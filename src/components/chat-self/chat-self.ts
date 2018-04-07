import { Component } from '@angular/core';

/**
 * Generated class for the ChatSelfComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-self',
  templateUrl: 'chat-self.html'
})
export class ChatSelfComponent {

  text: string;

  constructor() {
    console.log('Hello ChatSelfComponent Component');
    this.text = 'Hello World';
  }

}
