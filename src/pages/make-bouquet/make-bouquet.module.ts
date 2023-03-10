import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MakeBouquetPage } from './make-bouquet';

@NgModule({
  declarations: [
    MakeBouquetPage,
  ],
  imports: [
    IonicPageModule.forChild(MakeBouquetPage),
  ],
})
export class MakeBouquetPageModule {}
