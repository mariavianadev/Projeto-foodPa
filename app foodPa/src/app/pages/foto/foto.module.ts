import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { FotoPageRoutingModule } from './foto.routing.module';

import { FotoPage } from './foto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FotoPageRoutingModule,
    HttpClientModule
  ],
  declarations: [FotoPage]
})
export class FotoPageModule {}
