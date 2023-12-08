import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, IonicModule, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.page.html',
  styleUrls: ['./dados-usuario.page.scss'],
})
export class DadosUsuarioPage implements OnInit {
  usuario: Usuario;
  formGroup: FormGroup;

  constructor(
    private usuarioService: UsuarioService,
    private fBuilder: FormBuilder,
    private toastController: ToastController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private navController: NavController
  ) {

    this.usuario = new Usuario();
    this.formGroup = this.fBuilder.group({
      'email': [{ value: this.usuario.email, disabled: false }],
      'nome': [{ value: this.usuario.nome, disabled: false }],
    });

    let id = JSON.parse(localStorage.getItem('idUsuarioLogado') || '[]');
    this.usuarioService.buscarPorId(parseInt(id)).then((json) => {
      this.usuario = <Usuario>(json);

      console.log(this.usuario + "<------");

      this.formGroup.get('nome')?.setValue(this.usuario.nome);
      this.formGroup.get('email')?.setValue(this.usuario.email);
    })
  }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.carregarUsuario();
  }

  async carregarUsuario() {
    this.exibirLoader();
    const id = JSON.parse(localStorage.getItem('idUsuarioLogado') || '[]');
    await this.usuarioService.buscarPorId(parseInt(id)).then((json) => {
      this.usuario = json as Usuario;
      this.formGroup.get('email')?.setValue(this.usuario.email);
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
    this.usuario.nome = this.formGroup.value.nome;
    this.usuario.email = this.formGroup.value.email;
    
    const idUsuarioLogado = localStorage.getItem("idUsuarioLogado");
    if (idUsuarioLogado !== null) {
      this.usuario.id = parseInt(idUsuarioLogado);
  
      this.usuarioService.salvar(this.usuario)
    }
  }

  async recuperarSenha() {
    this.usuarioService.recuperarSenha(this.usuario.email).then((json) => {
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