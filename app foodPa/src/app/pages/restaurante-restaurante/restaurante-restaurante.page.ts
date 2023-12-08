import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, IonicModule, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Produto } from 'src/app/model/produto';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-restaurante-restaurante',
  templateUrl: './restaurante-restaurante.page.html',
  styleUrls: ['./restaurante-restaurante.page.scss'],
})
export class RestauranteRestaurantePage implements OnInit {

  produtos: Produto[];

  constructor(
    private toastController: ToastController, private alertController: AlertController, private produtoService: ProdutoService, 
    private loadingController: LoadingController, private activatedRoute: ActivatedRoute) {
    this.produtos = [];
  }

 
  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.carregarLista();
  }

  async carregarLista() {
    console.log("a");
    this.exibirLoader();
    let idRestaurante = this.activatedRoute.snapshot.params['idRestaurante'];   
    await this.produtoService.buscarPorIdRestaurante(idRestaurante)
      .then((json) => {
        this.produtos = <Produto[]>(json);
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

  
}
