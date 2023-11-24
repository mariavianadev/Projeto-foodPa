import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoUsuarioPageRoutingModule } from './produto-usuario-routing.module';

import { ProdutoUsuarioPage } from './produto-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ProdutoUsuarioPageRoutingModule
  ],
  declarations: [ProdutoUsuarioPage]
})
export class ProdutoUsuarioPageModule {}
