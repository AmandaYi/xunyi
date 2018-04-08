import { Component } from '@angular/core';
import {  ModalController, NavController} from 'ionic-angular';
import { NativeServiceProvider } from '../../providers/native-service/native-service';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {

  constructor(
    private modalCtrl: ModalController,
    private apiService:ApiServiceProvider,
  private nativeService: NativeServiceProvider,

private navController:NavController) {
this.postUserInfo();
    

  }

ionViewDidEnter(){
  this.checkLogin()
 this.postUserInfo()
}

userInfo:any;
postUserInfo(){
  let userId = localStorage.getItem("userId");
  this.apiService.searchuser(userId)
  .map(res=>res.json())
  .subscribe(
    item=>{
      // console.log(item)
      this.userInfo = item.userInfo;
    }
  )
}
 
  // 用户ID
  userId: number;

  // 检查是否已经登录,
  // 检查值,如果用户id存在,那么进入正常进入个人中心,如果不存在打开登录的模态窗口
  checkLogin() {
    // console.log(1);
   
    if (localStorage.getItem("userId")) {
      console.log("用户登陆");
      return;
    }else{
      this.loginPageModal();
    }
    
  }
  // 显示登录的模态窗
  loginPageModal() {
    let loginModal = this.modalCtrl.create("LoginPage", { 
      
    });
    loginModal.present();
  }


  // 退出登录
  unLogin(){
    this.nativeService.showConfirm("您确定退出登陆吗?",()=>{
      localStorage.removeItem("userId");
      this.loginPageModal();
    },()=>{
      console.log("呵呵");
    })
  }

  
//  进入个人中心
pushPersonalDetailPage(){
  this.navController.push("PersonalDetailPage")
}
 
}
