import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardapioRestaurantePageRoutingModule } from './cardapio-restaurante-routing.module';

import { CardapioRestaurantePage } from './cardapio-restaurante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardapioRestaurantePageRoutingModule
  ],
  declarations: [CardapioRestaurantePage]
})
export class CardapioRestaurantePageModule {}
