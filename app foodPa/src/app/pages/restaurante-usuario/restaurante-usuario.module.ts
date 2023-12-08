import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestauranteUsuarioPageRoutingModule } from './restaurante-usuario-routing.module';

import { RestauranteUsuarioPage } from './restaurante-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestauranteUsuarioPageRoutingModule
  ],
  declarations: [RestauranteUsuarioPage]
})
export class RestauranteUsuarioPageModule {}
