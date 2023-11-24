import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, IonicModule, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurante-usuario',
  templateUrl: './restaurante-usuario.page.html',
  styleUrls: ['./restaurante-usuario.page.scss'],
})
export class RestauranteUsuarioPage implements OnInit {

  produtos: Produto[];

  constructor(
    private toastController: ToastController, private alertController: AlertController, private produtoService: ProdutoService, 
    private loadingController: LoadingController, private fBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) {
   
    this.produtos = [];
  }

 
  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.carregarLista();
  }

  async carregarLista() {
    this.exibirLoader();
    let id = this.activatedRoute.snapshot.params['id']; 
    await this.produtoService.buscarPorIdRestaurante(id)
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
  
  nota!: number;

  avaliarRestaurante(nota: number){
    this.nota = nota;
    let id = JSON.parse(localStorage.getItem('idUsuarioLogado') || '[]');
  }

  async exibirMensagem(texto: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500
    })
    toast.present();
  }

  
}
