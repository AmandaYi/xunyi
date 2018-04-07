 
import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailCommentsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'detail-comments',
  templateUrl: 'detail-comments.html'
})
export class DetailCommentsComponent {
 


  constructor(public navParams:NavParams) {
    this.getKnowledgeId()
    
  }
  articleId:number;
  // 得到参数

  getKnowledgeId(){
    this.articleId=this.navParams.get("knowledgeId");
    console.log(this.articleId+"commonent is get params");
    
  }

}
