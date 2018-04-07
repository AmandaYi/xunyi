import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PublicServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PublicServiceProvider {
 
  constructor(public http: HttpClient) {
    console.log('Hello PublicServiceProvider Provider');
  }

/**
 * @name 计算当前时间到最后
 */
 nowTimeSelect(){
   let getHours = new Date().getHours();
   let getMinutes = new Date().getMinutes();
   let openingTime = { from: 8, to: 24 }
   let simpleColumns = [ ];
   for (let hour =  getHours + 1 < openingTime.from ? openingTime.from :  getHours + 1; hour < openingTime.to; hour++) {
    simpleColumns.push(  hour + ':00' + '-' + (hour + 1) + ':00'  )
   }
   return  simpleColumns
 }
}
