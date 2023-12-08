import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestauranteRestaurantePage } from './restaurante-restaurante.page';

const routes: Routes = [
  {
    path: '',
    component: RestauranteRestaurantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestauranteRestaurantePageRoutingModule {}
