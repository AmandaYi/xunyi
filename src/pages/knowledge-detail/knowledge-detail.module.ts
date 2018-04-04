import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KnowledgeDetailPage } from './knowledge-detail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    KnowledgeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(KnowledgeDetailPage),
    ComponentsModule
  ],
})
export class KnowledgeDetailPageModule {}
