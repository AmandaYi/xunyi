import { Component } from '@angular/core';

/**
 * Generated class for the HeaderHomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-home',
  templateUrl: 'header-home.html'
})
export class HeaderHomeComponent {

  text: string;

  constructor() {
    console.log('Hello HeaderHomeComponent Component');
    this.text = 'Hello World';
  }

}
