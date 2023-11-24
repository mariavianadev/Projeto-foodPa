import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginUsuarioPageRoutingModule } from './login-usuario-routing.module';

import { LoginUsuarioPage } from './login-usuario.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginUsuarioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginUsuarioPage]
})
export class LoginUsuarioPageModule {}
