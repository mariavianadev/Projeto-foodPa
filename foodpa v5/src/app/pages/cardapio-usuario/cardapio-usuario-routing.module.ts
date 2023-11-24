import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardapioUsuarioPage } from './cardapio-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: CardapioUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardapioUsuarioPageRoutingModule {}
