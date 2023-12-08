import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioRestaurantePage } from './inicio-restaurante.page';

const routes: Routes = [
  {
    path: '',
    component: InicioRestaurantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioRestaurantePageRoutingModule {}
