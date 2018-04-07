import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpServiceProvider } from '../http-service/http-service';
import { SERVER_URL } from '../constants/constants';


@Injectable()
export class ApiServiceProvider {

  constructor(public http: HttpServiceProvider) {
 
  }
 
  register(username,password) {
    let param = {
      username,
      password
        }
    return this.http.postFormData('/api/register', param)
  }

  //  list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }


  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }

  //  list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }


  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }

  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }

  //  list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }


  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }

  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }

  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }


  // list(code) {
  //   let param = {
  //     code: code,
  //   }
  //   return this.http.get('api/shop/home/list/', param)
  // }

}
