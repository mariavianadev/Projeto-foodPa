import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestauranteRestaurantePageRoutingModule } from './restaurante-restaurante-routing.module';

import { RestauranteRestaurantePage } from './restaurante-restaurante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestauranteRestaurantePageRoutingModule
  ],
  declarations: [RestauranteRestaurantePage]
})
export class RestauranteRestaurantePageModule {}
