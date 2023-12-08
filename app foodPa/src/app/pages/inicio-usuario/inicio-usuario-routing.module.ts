import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioUsuarioPage } from './inicio-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: InicioUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioUsuarioPageRoutingModule {}
