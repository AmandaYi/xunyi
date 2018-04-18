import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { HttpServiceProvider } from '../http-service/http-service';
import { SERVER_URL } from '../constants/constants';

import * as io from 'socket.io-client';
 


@Injectable()
export class ApiServiceProvider {

  constructor(public http: HttpServiceProvider,

  ) {

  }

  public socket;
  register(username, password) {
    let param = {
      username,
      password
    }
    return this.http.postFormData('/api/register', param)
  }


  login(username, password) {
    let param = {
      username,
      password
    }
    return this.http.postFormData('/api/login', param)
  }



  // 查找用户信息按钮

  searchuser(userId) {
    let param = {
      userId
    }
    return this.http.postFormData('/api/searchuser', param)
  }




  // 更新按钮

  updateuser(userId, nickname, signature, loverId) {
    let param = {
      userId,

      nickname,

      signature,

      loverId,
    }
    return this.http.postFormData('/api/updateuser', param)
  }


  // 得到每次对方发的信息
 


  // 自己进行发送信息
  /**
   * 
   * @param msg 每次发送的内容信息
   */
  sendMessage(msg) {
    // 发送的时候带上用户ID,内容
    let param={
      userId:localStorage.getItem("userId"),
      msg
    }
    let observable = new Observable(observable => {
      this.socket = io(SERVER_URL);
      this.socket.emit('chat-msg', param);
    })
    return observable;

  }




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
