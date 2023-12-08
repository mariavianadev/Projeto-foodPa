import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, IonicModule, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Restaurante } from 'src/app/model/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { ActivatedRoute } from '@angular/router';
import { AvaliacaoProduto } from 'src/app/model/avaliacaoProduto';
import { AvaliacaoRestaurante } from 'src/app/model/avaliacaoRestaurante';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-restaurante-usuario',
  templateUrl: './restaurante-usuario.page.html',
  styleUrls: ['./restaurante-usuario.page.scss'],
})
export class RestauranteUsuarioPage implements OnInit {
  avaliacaoRestaurante: AvaliacaoRestaurante;
  restaurante: Restaurante;
  produtos: Produto[];
  usuario: Usuario;
  

  constructor(
    private toastController: ToastController, private alertController: AlertController, 
    private loadingController: LoadingController, private fBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute, private restauranteService: RestauranteService, 
    private usuarioService: UsuarioService,private produtoService: ProdutoService,
    private navController: NavController,) {
   
      this.restaurante = new Restaurante();
      this.produtos = [];
      this.usuario = new Usuario();

    this.avaliacaoRestaurante = new AvaliacaoRestaurante();

    let idRestaurante = this.activatedRoute.snapshot.params['idRestaurante'];
    this.restauranteService.buscarPorId(idRestaurante).then((json) => {
      this.restaurante = <Restaurante> json;
      console.log(json);
    }).catch((erro) => {
      console.log('Erro: ', erro);
    });

    const idUsuario = JSON.parse(localStorage.getItem('idUsuarioLogado') || '[]');
    console.log(idUsuario);
    let verif;

    this.restauranteService.buscarPorIdRestauranteEidUsuario(idRestaurante, idUsuario).then((json) => {
      if((verif = json) != null ){
      this.avaliacaoRestaurante = <AvaliacaoRestaurante>json;
      }
      console.log(this.avaliacaoRestaurante);
    }).catch((erro) => {
      console.log('Erro: ', erro);
    });

  }

 
  ngOnInit() {
    this.getAvaliacaoRestaurante();
  }

  async getAvaliacaoRestaurante() {
    try {
      const idRestaurante = this.activatedRoute.snapshot.params['idRestaurante'];
      const idUsuario = JSON.parse(localStorage.getItem('idUsuarioLogado') || '[]');
  
      // Verifica se a avaliação já existe antes de atribuir
      const avaliacao = await this.restauranteService.buscarPorIdRestauranteEidUsuario(idRestaurante, idUsuario);
      this.avaliacaoRestaurante = avaliacao ? <AvaliacaoRestaurante>avaliacao : new AvaliacaoRestaurante();
  
      // Preencher a nota com a última avaliação, se existir
      this.nota = this.avaliacaoRestaurante ? this.avaliacaoRestaurante.nota : 0;
    } catch (erro) {
      console.log('Erro ao obter a avaliação do produto: ', erro);
    }
  }

  async ionViewWillEnter() {
    this.carregarLista();

    this.getMedia();
  }



  media: number|string = 0;
  total: number|string = 0;
  async getMedia(){
    try {
      const idRestaurante = this.activatedRoute.snapshot.params['idRestaurante'];
      const json = await this.restauranteService.buscarMediaPorIdRestaurante(idRestaurante);
      console.log(json);
      let result = <AvaliacaoRestaurante[]>json;
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

  async carregarLista() {
    this.exibirLoader();
    let id = this.activatedRoute.snapshot.params['idRestaurante']; 
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

  async avaliarRestaurante(){
    
    const id = JSON.parse(localStorage.getItem('idUsuarioLogado') || '[]');
    let idRestaurante = this.activatedRoute.snapshot.params['idRestaurante'];

    //this.avaliacaoProduto = new AvaliacaoProduto();

    this.avaliacaoRestaurante.idRestaurante = idRestaurante;
    this.avaliacaoRestaurante.idUsuario = id;
    this.avaliacaoRestaurante.nota = this.nota;


    await this.restauranteService.avaliarRestaurante(this.avaliacaoRestaurante).then((json) => {
      this.navController.navigateBack(('/inicio-usuario'));   
      this.avaliacaoRestaurante = <AvaliacaoRestaurante> json;
      console.log(json);
    }).catch((erro) => {
      console.log('Erro: ', erro);
    });
    
    this.navController.navigateBack(('/inicio-usuario'));   
  }

  setNota(nota: number) {
    this.nota = nota;
  }

  async exibirMensagem(texto: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500
    })
    toast.present();
  }

}
