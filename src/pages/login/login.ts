import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'LoginPage'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor( private navController:NavController,
    private  modalCtrl:ModalController) {
  }

//  如果用户没有注册啊
// 那么就进入注册页面把
 



  // 显示登录的模态窗
  registerPageModal() {
    let registerPageModal = this.modalCtrl.create("RegisterPage", { 
      
    });
    registerPageModal.present();
  }
 

}
