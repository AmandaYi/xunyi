import { Component } from '@angular/core';

/**
 * Generated class for the ChatOthersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-others',
  templateUrl: 'chat-others.html'
})
export class ChatOthersComponent {

  text: string;

  constructor() {
    console.log('Hello ChatOthersComponent Component');
    this.text = 'Hello World';
  }

}
