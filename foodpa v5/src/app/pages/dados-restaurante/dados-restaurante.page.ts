import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, IonicModule, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Restaurante } from 'src/app/model/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-dados-restaurante',
  templateUrl: './dados-restaurante.page.html',
  styleUrls: ['./dados-restaurante.page.scss'],
})
export class DadosRestaurantePage implements OnInit {
  restaurante: Restaurante;
  formGroup: FormGroup;

  constructor(
    private restauranteService: RestauranteService,
    private fBuilder: FormBuilder,
    private toastController: ToastController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private navController: NavController
  ) {

    this.restaurante = new Restaurante();
    this.formGroup = this.fBuilder.group({
      'nome': [{ value: this.restaurante.nome, disabled: false }],
      'cnpj': [{ value: this.restaurante.cnpj, disabled: false }],
      'telefone': [{ value: this.restaurante.telefone, disabled: false }],
      'endereco': [{ value: this.restaurante.endereco, disabled: false }],
      'email': [{ value: this.restaurante.email, disabled: false }],
    });

    let id = JSON.parse(localStorage.getItem('idRestauranteLogado') || '[]');
    this.restauranteService.buscarPorId(parseInt(id)).then((json) => {
      this.restaurante = <Restaurante>(json);

      console.log(this.restaurante + "<------");

      this.formGroup.get('nome')?.setValue(this.restaurante.nome);
      this.formGroup.get('cnpj')?.setValue(this.restaurante.cnpj);
      this.formGroup.get('telefone')?.setValue(this.restaurante.telefone);
      this.formGroup.get('endereco')?.setValue(this.restaurante.endereco);
      this.formGroup.get('email')?.setValue(this.restaurante.email);
    })
  }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.carregarRestaurante();
  }

  async carregarRestaurante() {
    this.exibirLoader();
    const id = JSON.parse(localStorage.getItem('idRestauranteLogado') || '[]');
    await this.restauranteService.buscarPorId(parseInt(id)).then((json) => {
      this.restaurante = json as Restaurante;
      this.formGroup.get('email')?.setValue(this.restaurante.email);
    });
    this.fecharLoader();
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

  salvar() {
    this.restaurante.nome = this.formGroup.value.nome;
    this.restaurante.cnpj = this.formGroup.value.cnpj;
    this.restaurante.endereco = this.formGroup.value.endereco;
    this.restaurante.email = this.formGroup.value.email;
    this.restaurante.telefone = this.formGroup.value.telefone;
    
    const idRestauranteLogado = localStorage.getItem("idRestauranteLogado");
    if (idRestauranteLogado !== null) {
      this.restaurante.id = parseInt(idRestauranteLogado);
  
      this.restauranteService.salvar(this.restaurante)
    }
  }

  async recuperarSenha() {
    this.restauranteService.recuperarSenha(this.restaurante.email).then((json) => {
        let teste = <any>(json);
        if (teste = true) {
            this.exibirMensagem("Senha enviada para o email de cadastro");
            this.navController.navigateBack('/home');
        } else {
            this.exibirMensagem("Erro ao recuperar senha!");
        }
    }).catch((erro) => {
        this.exibirMensagem("Erro ao realizar função! Erro:" + erro['message']);
    });
}



  async exibirMensagem(texto: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500
    });
    toast.present();
  }
}