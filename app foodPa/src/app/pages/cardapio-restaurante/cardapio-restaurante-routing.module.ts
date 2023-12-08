import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardapioRestaurantePage } from './cardapio-restaurante.page';

const routes: Routes = [
  {
    path: '',
    component: CardapioRestaurantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardapioRestaurantePageRoutingModule {}
