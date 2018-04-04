import { Component } from '@angular/core';

// 互相情侣定位
import { LocationPage } from '../location/location';
// 恋爱小知识
import { KnowledgePage } from '../knowledge/knowledge';
// 聊天功能
import { ChatroomPage } from '../chatroom/chatroom';
// 机器人聊天
import { RobotPage } from '../robot/robot';
// 个人中心
import { PersonalPage } from '../personal/personal';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LocationPage;
  tab2Root = KnowledgePage;
  tab3Root = ChatroomPage;
  tab4Root = RobotPage;
  tab5Root = PersonalPage;

  constructor() {

  }
}
