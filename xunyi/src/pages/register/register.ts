import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { NativeServiceProvider } from '../../providers/native-service/native-service';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "RegisterPage"
})
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public viewCtrl: ViewController,
    private apiService: ApiServiceProvider,
    private nativeService: NativeServiceProvider) {
  }



  dismissToLogin() {
    // let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss();

  }



  ionViewDidEnter(): void {

  }


  // 响应式表单
  registerFormModel: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormGroup({
      firstPassword: new FormControl(),
      lastPassword: new FormControl()
    })
  }, )

  // 执行注册
  onSubmit() {
   let username= this.registerFormModel.value.username;
   let firstPassword= this.registerFormModel.value.password.firstPassword;
   let lastPassword=this.registerFormModel.value.password.lastPassword;
  //  用户名表达式
 
    // console.log(this.registerFormModel.value)
    // 判断表单的值
    if ( !username ) {
      this.nativeService.showBlock("用户名不能为空",1000)
 
      return ;
    }
    if ( (!firstPassword) && (!lastPassword) && (firstPassword==lastPassword)) {
      this.nativeService.showBlock("密码有误或者不相同",1000)
 
      return ;
    }
    this.apiService.register(this.registerFormModel.value.username,
      this.registerFormModel.value.password.firstPassword)
      .map(r=>r.json())
      .subscribe(
        responent => {
          console.log(responent.state);
          if(responent.state==0){
            this.nativeService.showAlert("用户已存在");
          }
          if(responent.state==1){
            this.nativeService.showAlert("注册成功");
            this.viewCtrl.dismiss();
            // 写入lo
            // localStorage
          }
        }
      )
  }
}
