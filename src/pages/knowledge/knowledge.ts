import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

 
@Component({
  selector: 'page-knowledge',
  templateUrl: 'knowledge.html',
})
export class KnowledgePage {

  constructor(private navController:NavController) {
    this.getKnowLedges();
  }

  /*****************************页面操作PUSH*************************************/
//  进入到详情页面
  pushKnowledgeDetailPage(event,knowledgeId){
    console.log(event);
    this.navController.push("KnowledgeDetailPage",{
      knowledgeId
    });
  
  }
  /*****************************页面操作PUSH*************************************/
  knowledges:Array<Knowledges>;
  id:number;
  title:number;
getKnowLedges(){
  this.knowledges= [
    new Knowledges(0,"我喜欢一个人去天上旅游"),
    new Knowledges(1,"我喜欢一个人去天上旅游"),
    new Knowledges(2,"我喜欢一个人去天上旅游"),
    new Knowledges(3,"我喜欢一个人去天上旅游"),
    new Knowledges(3,"我喜欢一个人去天上旅游"),
    new Knowledges(3,"我喜欢一个人去天上旅游"),
    new Knowledges(3,"我喜欢一个人去天上旅游"),
    new Knowledges(3,"我喜欢一个人去天上旅游"),
    new Knowledges(3,"我喜欢一个人去天上旅游"),
    new Knowledges(3,"我喜欢一个人去天上旅游"),
    new Knowledges(3,"我喜欢一个人去天上旅游"),
    new Knowledges(3,"我喜欢一个人去天上旅游"),
    new Knowledges(3,"我喜欢一个人去天上旅游"),
    new Knowledges(3,"我喜欢一个人去天上旅游"),
    new Knowledges(3,"我喜欢一个人去天上旅游"),
    new Knowledges(3,"我喜欢一个人去天上旅游"),
    new Knowledges(3,"我喜欢一个人去天上旅游"),
    new Knowledges(3,"我喜欢一个人去天上旅游"),
    new Knowledges(3,"我喜欢一个人去天上旅游"),
 
 
  ]
}

}

// 知识列表
export class Knowledges{
  constructor(
    private id:number,
    private title:string
  ){}
}
