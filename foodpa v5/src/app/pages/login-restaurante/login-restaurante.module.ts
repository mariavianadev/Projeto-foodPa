import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginRestaurantePageRoutingModule } from './login-restaurante-routing.module';

import { LoginRestaurantePage } from './login-restaurante.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginRestaurantePageRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [LoginRestaurantePage]
})
export class LoginRestaurantePageModule {}
