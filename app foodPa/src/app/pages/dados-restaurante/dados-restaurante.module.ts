import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DadosRestaurantePageRoutingModule } from './dados-restaurante-routing.module';
import { DadosRestaurantePage } from './dados-restaurante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DadosRestaurantePageRoutingModule
  ],
  declarations: [DadosRestaurantePage]
})
export class DadosRestaurantePageModule {}