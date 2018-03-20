import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhisperPage } from './whisper';

@NgModule({
  declarations: [
    WhisperPage,
  ],
  imports: [
    IonicPageModule.forChild(WhisperPage),
  ],
})
export class WhisperPageModule {}
