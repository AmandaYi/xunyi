import { Component } from '@angular/core';

/**
 * Generated class for the FooterHomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'footer-home',
  templateUrl: 'footer-home.html'
})
export class FooterHomeComponent {

  text: string;

  constructor() {
    console.log('Hello FooterHomeComponent Component');
    this.text = 'Hello World';
  }

}
