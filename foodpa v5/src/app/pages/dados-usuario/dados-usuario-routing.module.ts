import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosUsuarioPage } from './dados-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: DadosUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosUsuarioPageRoutingModule {}
