import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestauranteUsuarioPage } from './restaurante-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: RestauranteUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestauranteUsuarioPageRoutingModule {}
