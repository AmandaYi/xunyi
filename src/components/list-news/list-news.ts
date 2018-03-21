import { Component } from '@angular/core';

/**
 * Generated class for the ListNewsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list-news',
  templateUrl: 'list-news.html'
})
export class ListNewsComponent {

  text: string;

  constructor() {
    console.log('Hello ListNewsComponent Component');
    this.text = 'Hello World';
  }

}
