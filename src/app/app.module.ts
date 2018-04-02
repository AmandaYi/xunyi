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
    IonicModule.forRoot(MyApp)
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
