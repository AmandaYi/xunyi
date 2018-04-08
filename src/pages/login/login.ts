import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { NativeServiceProvider } from '../../providers/native-service/native-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'LoginPage'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navController: NavController,
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private viewController: ViewController,

    private apiService: ApiServiceProvider,
    private nativeService: NativeServiceProvider) {
      this.getNavparams();
     this.clearForm();

  }
  stateSussess:boolean;

  // 接受参数
  getNavparams(){
    this.stateSussess=this.navParams.get("stateSussess");
    console.log( this.stateSussess);
    if(this.stateSussess){
        this.viewController.dismiss();
    }else{
      return;
    }
  }

  // 清空表单
  clearForm(){
    let username = this.loginFormModel.value.username;
    let password = this.loginFormModel.value.password;
    username="";username="";
  }




  // 表单

  loginFormModel: FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  })

  onSubmit() {
    let username = this.loginFormModel.value.username;
    let password = this.loginFormModel.value.password;

    this.apiService.login(username, password)
      .map(res => res.json())
      .subscribe((res) => {
        if (res.state == -1) {
          this.nativeService.showAlert("用户名或密码错误")
        } else if (res.state == 1) {
          this.nativeService.showBlock("登陆成功")
          console.log(res);
          localStorage.setItem("userId", res.userId);
          this.viewController.dismiss();
        }

      })

    console.log(this.loginFormModel.value);
  }







  // 如果用户从注册页面过来了,那么直接显示个人中心

  ionViewDidEnter() {
    // if( localStorage.getItem("userId") ){
    //   this.viewController.dismiss();
    // };
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
