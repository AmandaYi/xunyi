import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalDetailPage } from './personal-detail';

@NgModule({
  declarations: [
    PersonalDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalDetailPage),
  ],
})
export class PersonalDetailPageModule {}
