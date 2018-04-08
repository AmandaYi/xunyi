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

   
  login(username,password) {
    let param = {
      username,
      password
        }
    return this.http.postFormData('/api/login', param)
  }


  
  // 更新按钮
  
  searchuser(userId) {
    let param = {
      userId
    }
    return this.http.postFormData('/api/searchuser', param)
  }




  // 更新按钮
  
   updateuser(userId,nickname,signature,loverId) {
    let param = {
      userId,

      nickname,

      signature,
 
      loverId,
    }
    return this.http.postFormData('/api/updateuser', param)
  }


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
