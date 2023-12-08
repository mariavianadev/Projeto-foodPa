import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosRestaurantePage } from './dados-restaurante.page';

const routes: Routes = [
  {
    path: '',
    component: DadosRestaurantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosRestaurantePageRoutingModule {}
