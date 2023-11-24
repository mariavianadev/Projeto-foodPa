import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardapioUsuarioPageRoutingModule } from './cardapio-usuario-routing.module';

import { CardapioUsuarioPage } from './cardapio-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardapioUsuarioPageRoutingModule
  ],
  declarations: [CardapioUsuarioPage]
})
export class CardapioUsuarioPageModule {}
