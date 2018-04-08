import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiServiceProvider } from '../../providers/api-service/api-service';

/**
 * Generated class for the PersonalDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "PersonalDetailPage"
})
@Component({
  selector: 'page-personal-detail',
  templateUrl: 'personal-detail.html',
})
export class PersonalDetailPage {

  constructor(public navController: NavController, public navParams: NavParams,
    private apiService: ApiServiceProvider

  ) { 
    this.postUserInfo()
    
  }
  userId:any=localStorage.getItem("userId");
 
  // 得到个人信息

  userInfo:any;
  // personalDetailFormModel: FormGroup = new FormGroup({
  //   userId: new FormControl({
  //     value: this.userId,
  //     disabled: true
  //   }),
  //   nickname: new FormControl({
  //     // value:this.userInfo.nickname,
  //     // disabled: true
  //   }),
  //   signature: new FormControl(),
  //   // userSex: new FormGroup({
  //   //   man: new FormControl(),
  //   //   woman: new FormControl()
  //   // }),
  //   loverId: new FormControl()
  // })

 
// 修改个人信息
pushPersonalUpdatePage(){
  this.navController.push("PersonalUpdatePage");
}

  onSubmit(){}





  // searchuser
  // 得到个人信息

 
  postUserInfo(){
    this.apiService.searchuser(this.userId)
    .map(res=>res.json())
    .subscribe((item)=>{
     this.userInfo = item.userInfo;

    })
  }

  ionViewDidEnter(){
    this.postUserInfo()
  }
}
