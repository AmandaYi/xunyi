import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

// 引入了这个之后 就一直循环不显示任何内容, 
import { Tabs } from 'ionic-angular';


// 首页
import { HomePage } from "../home/home";
// 知识
import { NewsPage } from "../news/news";
// 蜜语
import { WhisperPage } from "../whisper/whisper";
// 个人中心
import { PersonalPage } from "../personal/personal";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  constructor(private navCtrl: NavController) {
   
  }

  @ViewChild('myTabs') tabRef;


  // 页面绑定
  tab1Root = PersonalPage;
  tab2Root = NewsPage;
  tab3Root = WhisperPage;
  tab4Root = PersonalPage;

  // 页面初始化
  switchTabs() {
    this.navCtrl.push(NewsPage);
  }
  

}
