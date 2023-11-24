import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DadosUsuarioPageRoutingModule } from './dados-usuario-routing.module';
import { DadosUsuarioPage } from './dados-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DadosUsuarioPageRoutingModule
  ],
  declarations: [DadosUsuarioPage]
})
export class DadosUsuarioPageModule {}