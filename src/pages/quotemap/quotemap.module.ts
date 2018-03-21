import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuotemapPage } from './quotemap';

@NgModule({
  declarations: [
    QuotemapPage,
  ],
  imports: [
    IonicPageModule.forChild(QuotemapPage),
  ],
})
export class QuotemapPageModule {}
