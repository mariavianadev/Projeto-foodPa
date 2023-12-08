import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { CadastroProduto } from 'src/app/model/cadastro-produto';
import { CadastroProdutoService } from 'src/app/services/cadastro-produto.service';
@Component({
  selector: 'app-registro-CadastroProdutoService',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
})
export class CadastroProdutoPage implements OnInit {
  cadastro: CadastroProduto;
  produto: Produto
  formGroup: FormGroup;
  idRestaurante : number;
  constructor(private activatedRoute: ActivatedRoute, private toastController: ToastController, private navController: NavController,
    private formBuilder: FormBuilder, private cadastroProdutoService: CadastroProdutoService, private produtoService: ProdutoService) {
    this.cadastro = new CadastroProduto();
    this.produto = new Produto();
    

    this.formGroup = formBuilder.group({
      'nome': [this.cadastro.nome, Validators.compose([
        Validators.required,
      ])],
      'valor': [this.cadastro.valor, Validators.compose([
        Validators.required,
      ])],
      'descricao': [this.cadastro.descricao, Validators.compose([
        Validators.required,
      ])],
    });
    this.idRestaurante = JSON.parse(localStorage.getItem('idRestauranteLogado') || '[]') as number;
  }

  ngOnInit() {
  }

  async verificarProduto() {

    let nome = this.formGroup.value.nome;
    let valor = this.formGroup.value.valor;
    let descricao = this.formGroup.value.descricao;

    this.cadastroProdutoService.verificarProduto(nome).then((json) => {
      
      if (<Produto>(json) === null) {
        this.cadastro.idRestaurante = this.idRestaurante;
        this.cadastro.nome = nome;
        this.cadastro.valor = valor;
        this.cadastro.descricao = descricao;

        this.cadastroProdutoService.salvar(this.cadastro).then((json) => {
          this.cadastro = <CadastroProduto>(json);

          if (this.cadastro.id > 0) {
            this.exibirMensagem('Cadastro realizado com sucesso!');
            this.navController.navigateBack("/inicio-restaurante");
          }
        }).catch((erro) => {
          this.exibirMensagem("Erro ao cadastrar produto! Erro:" + erro['menssage']);
        });

      } else {
        this.exibirMensagem('Produto com esse nome já cadastrado');
      }
    }).catch((erro) => {
      this.exibirMensagem("Erro ao verificar o produto! Erro:" + erro['menssage']);
    });
  }

  async exibirMensagem(texto: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500
    })
    toast.present();
  }
}