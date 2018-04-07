import { Component } from '@angular/core';
import {  NavParams } from 'ionic-angular';
// @IonicPage({
//   name:"KnowledgeDetailPage"
// })
@Component({
  selector: 'page-knowledge-detail',
  templateUrl: 'knowledge-detail.html',
})
export class KnowledgeDetailPage {

  constructor(private navParams: NavParams) {
   this.getKnowledgeId()
  }
//  点击的知识文章id

  knowledgeId:number;
  // 得到参数

  getKnowledgeId(){
    this.knowledgeId=this.navParams.get("knowledgeId");
    console.log(this.knowledgeId);
    
  }

}
