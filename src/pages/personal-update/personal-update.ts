import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

/**
 * Generated class for the PersonalUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "PersonalUpdatePage"
})
@Component({
  selector: 'page-personal-update',
  templateUrl: 'personal-update.html',
})
export class PersonalUpdatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private apiService: ApiServiceProvider) {

    this.updateDetail()
  }

  updateDetail() {
    console.log(111111);
    console.log(localStorage.getItem("userId"));


  }
  userId: any = localStorage.getItem("userId");
  personalDetailFormModel: FormGroup = new FormGroup({
    userId: new FormControl( ),
    nickname: new FormControl(),
    signature: new FormControl(),
    // userSex: new FormGroup({
    //   man: new FormControl(),
    //   woman: new FormControl()
    // }),
    loverId: new FormControl()
  })

  // ionViewDidEnter(){
  //   this.personalDetailFormModel.patchValue({
  //     userId: this.userId,
  //     nickname:"",
  //     signature:"",
  //     loverId:""
  //   })
  // }
  onSubmit() {
    // userId,

    // nickname,

    // signature,

    // loverId,
    // console.log(this.personalDetailFormModel.value)
    this.apiService.updateuser(this.userId,
      this.personalDetailFormModel.value.nickname,
      this.personalDetailFormModel.value.signature,
      this.personalDetailFormModel.value.loverId)
      .map(res=>res.json())
      .subscribe(
        (item) => {
          console.log(item);
          if(item.code==0){
            this.navCtrl.pop();
          }

        }
      )
  }
}
