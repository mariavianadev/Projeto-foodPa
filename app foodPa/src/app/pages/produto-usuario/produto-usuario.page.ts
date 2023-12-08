import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, IonicModule, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { ActivatedRoute } from '@angular/router';
import { AvaliacaoProduto } from 'src/app/model/avaliacaoProduto';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-produto-usuario',
  templateUrl: './produto-usuario.page.html',
  styleUrls: ['./produto-usuario.page.scss'],
})
export class ProdutoUsuarioPage implements OnInit {

  avaliacaoProduto: AvaliacaoProduto;
  usuario: Usuario;
  produto: Produto;
  formGroup: FormGroup;

  constructor(
    private produtoService: ProdutoService,
    private fBuilder: FormBuilder,
    private toastController: ToastController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private navController: NavController,
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {
    //this.avaliacaoProduto = new AvaliacaoProduto();
    this.produto = new Produto();
    this.usuario = new Usuario();
    

    this.formGroup = this.fBuilder.group({
      'nome': [{ value: this.produto.nome, disabled: false }],
      'valor': [{ value: this.produto.valor, disabled: false }],
      'descricao': [{ value: this.produto.descricao, disabled: false }],
    });

    this.avaliacaoProduto = new AvaliacaoProduto();
    
    /*
    idproduto rota
    idusuario localstora

    recuperar a avaliacao pelo idproduto e  idusuario
    */

    let idProduto = this.activatedRoute.snapshot.params['idProduto'];
    this.produtoService.buscarPorId(idProduto).then((json) => {
      this.produto = <Produto> json;
      console.log(json);
    }).catch((erro) => {
      console.log('Erro: ', erro);
    });

    const idUsuario = JSON.parse(localStorage.getItem('idUsuarioLogado') || '[]');
    console.log(idUsuario);
    let verif;

    this.produtoService.buscarPorIdProdutoEidUsuario(idProduto, idUsuario).then((json) => {
      if((verif = json) != null ){
      this.avaliacaoProduto = <AvaliacaoProduto>json;
      }
      console.log(this.avaliacaoProduto);
    }).catch((erro) => {
      console.log('Erro: ', erro);
    });

    //this.getMedia();

  }

  ngOnInit() {
    this.carregarProduto();
    this.getAvaliacaoProduto();
  }
  
  async getAvaliacaoProduto() {
    try {
      const idProduto = this.activatedRoute.snapshot.params['idProduto'];
      const idUsuario = JSON.parse(localStorage.getItem('idUsuarioLogado') || '[]');
  
      // Verifica se a avaliação já existe antes de atribuir
      const avaliacao = await this.produtoService.buscarPorIdProdutoEidUsuario(idProduto, idUsuario);
      this.avaliacaoProduto = avaliacao ? <AvaliacaoProduto>avaliacao : new AvaliacaoProduto();
  
      // Preencher a nota com a última avaliação, se existir
      this.nota = this.avaliacaoProduto ? this.avaliacaoProduto.nota : 0;
    } catch (erro) {
      console.log('Erro ao obter a avaliação do produto: ', erro);
    }
  }
  


  async ionViewWillEnter() {
    this.carregarProduto();
    //this.salvar();

    this.getMedia();
  }

  media: number|string = 0;
  total: number|string = 0;
  async getMedia(){
    try {
      const idProduto = this.activatedRoute.snapshot.params['idProduto'];
      const json = await this.produtoService.buscarMediaPorIdProduto(idProduto);
      console.log(json);
      let result = <AvaliacaoProduto[]>json;
      if(result.length >0){

        let sum =0 ;
  
        console.log(result);
        for(let j of result){
          sum+= j.nota;
        }
  
        this.media = sum/result.length;
        this.total = result.length;
      }else{
        this.media = 'Ainda não há avaliações'
      }

      console.log(this.media)
      return this.media;
    } catch (erro) {
      console.log('Erro: ', erro);
      throw erro;
    }
  }

  nota = 0;

  async avaliarProduto() {

    const id = JSON.parse(localStorage.getItem('idUsuarioLogado') || '[]');
    let idProduto = this.activatedRoute.snapshot.params['idProduto'];
    this.avaliacaoProduto.idProduto = idProduto;
    this.avaliacaoProduto.idUsuario = id;
    this.avaliacaoProduto.nota = this.nota;

    await this.produtoService.avaliarProduto(this.avaliacaoProduto).then((json) => {
      this.navController.navigateBack(('/restaurante-usuario/'+this.produto.idRestaurante));   
      this.avaliacaoProduto = <AvaliacaoProduto> json;
      console.log(json);
    }).catch((erro) => {
      console.log('Erro: ', erro);
    });
    this.navController.navigateBack(('/restaurante-usuario/'+this.produto.idRestaurante));  
  }

  setNota(nota: number) {
    this.nota = nota;
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
