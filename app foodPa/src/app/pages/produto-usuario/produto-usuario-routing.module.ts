import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoUsuarioPage } from './produto-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoUsuarioPageRoutingModule {}
