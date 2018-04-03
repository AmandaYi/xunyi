import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// 互相情侣定位
import { LocationPage } from '../pages/location/location';
// 恋爱小知识
import { KnowledgePage } from '../pages/knowledge/knowledge';
// 聊天功能
import { ChatroomPage } from '../pages/chatroom/chatroom';
// 机器人聊天
import { RobotPage } from '../pages/robot/robot';
// 个人中心
import { PersonalPage } from '../pages/personal/personal';
// 标签TABS页面
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LocationPage,
    KnowledgePage,
    ChatroomPage,
    RobotPage,
    PersonalPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: 'true',//所有子页面tabs隐藏
      backButtonText: '<',
      iconMode: 'ios',
      mode: 'ios', //默认为ios样式
      // cache: false,             //禁止应用缓存
      autoFocusassist: false,   //自动聚焦
      scrollAssist: false,      // 禁止智能滚动
      tabsHighlight: false,      //是否在选择该选项卡时显示高亮线。

      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition',
      backButtonIcon: 'backicon'

      // backButtonIcon:'arrow-back'
      // 后面这两是应对手机键盘弹出时会把界面撑上去的问题
    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LocationPage,
    KnowledgePage,
    ChatroomPage,
    RobotPage,
    PersonalPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
