import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicial',
    pathMatch: 'full'
  },
  {
    path: 'inicial',
    loadChildren: () => import('./pages/inicial/inicial.module').then(m => m.InicialPageModule)
  },
  {
    path: 'foto/:id',
    loadChildren: () => import('./pages/foto/foto.module').then(m => m.FotoPageModule)
  },
  {
    path: 'cadastro-usuario',
    loadChildren: () => import('./pages/cadastro-usuario/cadastro-usuario.module').then(m => m.CadastroUsuarioPageModule)
  },
  {
    path: 'login-usuario',
    loadChildren: () => import('./pages/login-usuario/login-usuario.module').then(m => m.LoginUsuarioPageModule)
  },
  {
    path: 'inicio-usuario',
    loadChildren: () => import('./pages/inicio-usuario/inicio-usuario.module').then(m => m.InicioUsuarioPageModule)
  },
  {
    path: 'dados-usuario',
    loadChildren: () => import('./pages/dados-usuario/dados-usuario.module').then(m => m.DadosUsuarioPageModule)
  },
  {
    path: 'cadastro-restaurante',
    loadChildren: () => import('./pages/cadastro-restaurante/cadastro-restaurante.module').then(m => m.CadastroRestaurantePageModule)
  },
  {
    path: 'login-restaurante',
    loadChildren: () => import('./pages/login-restaurante/login-restaurante.module').then(m => m.LoginRestaurantePageModule)
  },
  {
    path: 'inicio-restaurante',
    loadChildren: () => import('./pages/inicio-restaurante/inicio-restaurante.module').then(m => m.InicioRestaurantePageModule)
  },
  {
    path: 'cardapio-usuario',
    loadChildren: () => import('./pages/cardapio-usuario/cardapio-usuario.module').then(m => m.CardapioUsuarioPageModule)
  },
  {
    path: 'restaurante-usuario/:id',
    loadChildren: () => import('./pages/restaurante-usuario/restaurante-usuario.module').then(m => m.RestauranteUsuarioPageModule)
  },
  {
    path: 'produto-usuario',
    loadChildren: () => import('./pages/produto-usuario/produto-usuario.module').then(m => m.ProdutoUsuarioPageModule)
  },
  {
    path: 'produto-usuario/:idProduto',
    loadChildren: () => import('./pages/produto-usuario/produto-usuario.module').then(m => m.ProdutoUsuarioPageModule)
  },
  {
    path: 'dados-restaurante',
    loadChildren: () => import('./pages/dados-restaurante/dados-restaurante.module').then(m => m.DadosRestaurantePageModule)
  },
  {
    path: 'restaurante-restaurante',
    loadChildren: () => import('./pages/restaurante-restaurante/restaurante-restaurante.module').then(m => m.RestauranteRestaurantePageModule)
  },
  {
    path: 'restaurante-restaurante/:idRestaurante',
    loadChildren: () => import('./pages/restaurante-restaurante/restaurante-restaurante.module').then(m => m.RestauranteRestaurantePageModule)
  },
  {
    path: 'cardapio-restaurante',
    loadChildren: () => import('./pages/cardapio-restaurante/cardapio-restaurante.module').then(m => m.CardapioRestaurantePageModule)
  },
  {
    path: 'cadastro-produto',
    loadChildren: () => import('./pages/cadastro-produto/cadastro-produto.module').then(m => m.CadastroProdutoPageModule)
  },
  {
    path: 'cadastro-produto/:idRestaurante',
    loadChildren: () => import('./pages/cadastro-produto/cadastro-produto.module').then(m => m.CadastroProdutoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
