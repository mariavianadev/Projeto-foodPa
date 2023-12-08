import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginUsuarioPage } from './login-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: LoginUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginUsuarioPageRoutingModule {}
