import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KnowledgeDetailPage } from './knowledge-detail';

@NgModule({
  declarations: [
    KnowledgeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(KnowledgeDetailPage)
  ],
})
export class KnowledgeDetailPageModule {}
