import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicebookingPage } from './servicebooking';

@NgModule({
  declarations: [
    ServicebookingPage,
  ],
  imports: [
    IonicPageModule.forChild(ServicebookingPage),
  ],
})
export class ServicebookingPageModule {}
