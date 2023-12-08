import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import {CadastroRestaurantePageRoutingModule } from './cadastro-restaurante-routing.module';

import { CadastroRestaurantePage } from './cadastro-restaurante.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroRestaurantePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CadastroRestaurantePage]

})
export class CadastroRestaurantePageModule {}
