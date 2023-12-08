import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, IonicModule, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Restaurante } from 'src/app/model/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { ProdutoService } from 'src/app/services/produto.service';
// import { Avaliacao } from '../../model/avaliacaoProduto';

@Component({
  selector: 'app-inicio-usuario',
  templateUrl: './inicio-usuario.page.html',
  styleUrls: ['./inicio-usuario.page.scss'],
})

export class InicioUsuarioPage implements OnInit {

  restaurantescategoria: Restaurante[];
  restaurantes: Restaurante[];
  v: number;
  // avaliacao: Avaliacao;

  constructor(
    private toastController: ToastController, private alertController: AlertController, 
    private restauranteService: RestauranteService,
    private loadingController: LoadingController,
    private produtoService: ProdutoService,) {
    this.restaurantes = [];
    this.restaurantescategoria = [];
    this.v = 0;

  }


  ngOnInit() {
  }

  
  async ionViewWillEnter() {
    this.carregarLista();
  }

  async carregarLista() {
    this.exibirLoader();
    await this.restauranteService.listar()
      .then((json) => {
        this.restaurantes = <Restaurante[]>(json);
      });

    this.fecharLoader();
  }

  exibirLoader() {
    this.loadingController.create({
      message: 'Carregando...'
    }).then((res) => {
      res.present();
    })
  }

  fecharLoader() {
    setTimeout(() => {
      this.loadingController.dismiss().then(() => {
      }).catch((erro) => {
        console.log('Erro: ', erro)
      });
    }, 500);
  }

  async exibirMensagem(texto: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500
    })
    toast.present();
  }

  async Pizzaria() {
     await this.restauranteService.listar().then((json) => {
      this.restaurantes = <Restaurante[]>(json);
    });
    let j = 0;
    this.restaurantescategoria = [];
    for (let i = 0; i < this.restaurantes.length; i++) {
      if (this.restaurantes[i].categoria === "Pizzaria") {
        this.restaurantescategoria[j] = this.restaurantes[i];
        j++;
      }
      else {
      }
    }
    this.restaurantes = [];
    this.restaurantes = this.restaurantescategoria;
    this.v = 1;
  }

  async Hamburgueria() {
    await this.restauranteService.listar().then((json) => {
      this.restaurantes = <Restaurante[]>(json);
    });
    let j = 0;
    this.restaurantescategoria = [];
    for (let i = 0; i < this.restaurantes.length; i++) {
      if (this.restaurantes[i].categoria === "Hamburgueria") {
        this.restaurantescategoria[j] = this.restaurantes[i];
        j++;
      }
      else {
      }
    }
    this.restaurantes = [];
    this.restaurantes = this.restaurantescategoria;
    this.v = 1;
  }

  async Japonesa() {
    await this.restauranteService.listar().then((json) => {
      this.restaurantes = <Restaurante[]>(json);
    });
    let j = 0;
    this.restaurantescategoria = [];
    for (let i = 0; i < this.restaurantes.length; i++) {
      if (this.restaurantes[i].categoria === "Japonesa") {
        this.restaurantescategoria[j] = this.restaurantes[i];
        j++;
      }
      else {
      }
    }
    this.restaurantes = [];
    this.restaurantes = this.restaurantescategoria;
    this.v = 1;
  }


  async Sorveteria() {
    await this.restauranteService.listar().then((json) => {
      this.restaurantes = <Restaurante[]>(json);
    });
    let j = 0;
    this.restaurantescategoria = [];
    for (let i = 0; i < this.restaurantes.length; i++) {
      if (this.restaurantes[i].categoria === "Sorveteria") {
        this.restaurantescategoria[j] = this.restaurantes[i];
        j++;
      }
      else {
      }
    }
    this.restaurantes = [];
    this.restaurantes = this.restaurantescategoria;
    this.v = 1;
  }

  async Gourmet() {
    await this.restauranteService.listar().then((json) => {
      this.restaurantes = <Restaurante[]>(json);
    });
    let j = 0;
    this.restaurantescategoria = [];
    for (let i = 0; i < this.restaurantes.length; i++) {
      if (this.restaurantes[i].categoria === "Gourmet") {
        this.restaurantescategoria[j] = this.restaurantes[i];
        j++;
      }
      else {
      }
    }
    this.restaurantes = [];
    this.restaurantes = this.restaurantescategoria;
    this.v = 1;
  }

  async Mar() {
    await this.restauranteService.listar().then((json) => {
      this.restaurantes = <Restaurante[]>(json);
    });
    let j = 0;
    this.restaurantescategoria = [];
    for (let i = 0; i < this.restaurantes.length; i++) {
      if (this.restaurantes[i].categoria === "Mar") {
        this.restaurantescategoria[j] = this.restaurantes[i];
        j++;
      }
      else {
      }
    }
    this.restaurantes = [];
    this.restaurantes = this.restaurantescategoria;
    this.v = 1;
  }

  async Todos() {
    await this.restauranteService.listar().then((json) => {
      this.restaurantes = <Restaurante[]>(json);
    });
  }

}