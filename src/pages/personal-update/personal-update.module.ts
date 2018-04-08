import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalUpdatePage } from './personal-update';

@NgModule({
  declarations: [
    PersonalUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalUpdatePage),
  ],
})
export class PersonalUpdatePageModule {}
