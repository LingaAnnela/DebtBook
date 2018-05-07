import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageClientPage } from './manage-client';

@NgModule({
  declarations: [
    ManageClientPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageClientPage),
  ],
})
export class ManageClientPageModule {}
