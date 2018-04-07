import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, LoadingController, Platform, Loading, AlertController, ModalController } from 'ionic-angular';
import { REQUEST_TIMEOUT } from "../constants/constants"


@Injectable()
export class NativeServiceProvider {


  private loadingIsOpen: boolean = false;
  private loading: Loading;
  constructor(
    public http: HttpClient,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private platform: Platform,
    private loadingCtrl: LoadingController,
  ) {
    console.log('Hello NativeServiceProvider Provider');
  }


  /**
* 弹窗
*/
  showAlert(text: string = '操作成功') {
    let alert = this.alertCtrl.create({
      title: text,
      buttons: ['确定']
    });
    alert.present();
  }

  showConfirm(text: string = '确定吗',fn_y=()=>{},fn_n=()=>{}) {
    let alert = this.alertCtrl.create({
      title: text,
      buttons: [
        {
          text: '是',
  
          handler: fn_y
        },
        {
          text: '否',
          handler:fn_n
        }
      ]
    });
    alert.present();
  }
  /**
 * 黑色闪窗
 */
  showBlock(text: string = '操作成功', time: number = 1200) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: time,
      position: 'middle'
    });
    toast.present();
  }


  /**
* 统一调用此方法显示loading
* @param content 显示的内容
*/
  showLoading(content: string = ''): void {

    if (!this.loadingIsOpen) {
      this.loadingIsOpen = true;
      this.loading = this.loadingCtrl.create({
        content: content
      });
      this.loading.present();
      setTimeout(() => {
        this.loadingIsOpen && this.loading.dismiss();
        this.loadingIsOpen = false;
      }, REQUEST_TIMEOUT);
    }
  };

  /**
 * 关闭loading
 */
  hideLoading(): void {

    if (this.loadingIsOpen) {
      setTimeout(() => {
        this.loading.dismiss();
        this.loadingIsOpen = false;
      }, 200);
    }
  };

  /**
 * 统一调用此方法显示提示信息
 * @param message 信息内容
 * @param duration 显示时长
 */
  showToast(message, duration: number = 2000) {
    this.toastCtrl.create({
      message: message,
      duration: duration,
      position: 'middle',
      showCloseButton: false
    }).present();
  };

  /**
   * 是否真机环境
   * @return {boolean}
   */
  isMobile() {
    return this.platform.is('mobile') && !this.platform.is('mobileweb');
  }

  /**
   * 是否android真机环境
   * @return {boolean}
   */
  isAndroid() {
    return this.isMobile() && this.platform.is('android');
  }

  /**
   * 是否ios真机环境
   * @return {boolean}
   */
  isIos() {
    return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
  }

  //   /**
  //    * 判断网络
  //    */
  //   getnetwork() {

  //     if (this.isMobile) {
  //       return this.network.type != 'none' ? true : false;
  //     }
  //   }

  //   /**
  //  * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
  //  */
  //   getNetworkType(): string {
  //     if (!this.isMobile()) {
  //       return 'wifi';
  //     }
  //     return this.network.type;
  //   }

  //   /**
  //  * 判断是否有网络
  //  */
  //   isConnecting(): boolean {
  //     return this.getNetworkType() != 'none';
  //   }












  /********************七月*********************/
// 一个方方的白色的块,添加地址成功提示
  // showToastBlock(
  // message:any="",
  // duration:number=3000000,
  // position:string="middle",
  // cssClass:string="showToastBlock") {
  //   let toast = this.toastCtrl.create({
  //     message,
  //     duration,
  //     position,
  //     cssClass
  //   });
  
  //   toast.onDidDismiss(() => {
  //     console.log('Dismissed toast');
  //   });
  
  //   toast.present();
  // }

















}
