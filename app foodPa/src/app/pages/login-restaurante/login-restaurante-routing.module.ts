import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginRestaurantePage } from './login-restaurante.page';

const routes: Routes = [
  {
    path: '',
    component: LoginRestaurantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRestaurantePageRoutingModule {}
