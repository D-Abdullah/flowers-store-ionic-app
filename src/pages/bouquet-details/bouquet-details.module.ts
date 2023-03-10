import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BouquetDetailsPage } from './bouquet-details';

@NgModule({
  declarations: [
    BouquetDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BouquetDetailsPage),
  ],
})
export class BouquetDetailsPageModule {}
