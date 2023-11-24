import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, IonicModule, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-usuario',
  templateUrl: './produto-usuario.page.html',
  styleUrls: ['./produto-usuario.page.scss'],
})
export class ProdutoUsuarioPage implements OnInit {

  produto: Produto;
  formGroup: FormGroup;

  constructor(
    private produtoService: ProdutoService,
    private fBuilder: FormBuilder,
    private toastController: ToastController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private navController: NavController,
    private activatedRoute: ActivatedRoute
  ) {

    this.produto = new Produto();
    this.formGroup = this.fBuilder.group({
      'nome': [{ value: this.produto.nome, disabled: false }],
      'valor': [{ value: this.produto.valor, disabled: false }],
      'descricao': [{ value: this.produto.descricao, disabled: false }],
    });
  }

  ngOnInit() {
    this.carregarProduto();
  }


  async ionViewWillEnter() {
    this.carregarProduto();
  }

  nota!: number;

  avaliarProduto(nota: number){
    this.nota = nota;
    const id = JSON.parse(localStorage.getItem('idUsuarioLogado') || '[]');
  }

  async carregarProduto() {
    let idProduto = this.activatedRoute.snapshot.params['idProduto'];   
    await this.produtoService.buscarPorId(parseInt(idProduto)).then((json) => {
      this.produto = json as Produto;
      this.formGroup.get('nome')?.setValue(this.produto.nome);
      this.formGroup.get('valor')?.setValue(this.produto.valor);
      this.formGroup.get('descricao')?.setValue(this.produto.descricao);
    }).catch((erro) => {
      console.log('Erro: ', erro);
    });
  }

  exibirLoader() {
    this.loadingController.create({
      message: 'Carregando...'
    }).then((res) => {
      res.present();
    });
  }

  fecharLoader() {
    setTimeout(() => {
      this.loadingController.dismiss().then(() => {
      }).catch((erro) => {
        console.log('Erro: ', erro);
      });
    }, 500);
  }
}

