import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { Usuario } from 'src/app/model/usuario';
import { LoginUsuarioService } from 'src/app/services/login-usuario.service';

@Component({
  selector: 'app-registro-login',
  templateUrl: './login-usuario.page.html',
  styleUrls: ['./login-usuario.page.scss'],
})

export class LoginUsuarioPage implements OnInit {
  login: LoginUsuario;
  formGroup: FormGroup;
  usuario: Usuario;
  constructor(private activatedRoute: ActivatedRoute, private toastController: ToastController, private navController: NavController, private formBuilder: FormBuilder, private loginUsuarioService: LoginUsuarioService) {
    this.login = new LoginUsuario();
    this.usuario = new Usuario;
    this.formGroup = formBuilder.group({
      'email': [this.login.email, Validators.compose([
        Validators.required,
      ])],
      'senha': [this.login.senha, Validators.compose([
        Validators.required,
      ])],
    });
  }

  ngOnInit() {
  }

  verificarUsuario() {
    this.login.email = this.formGroup.value.email;
    this.login.senha = this.formGroup.value.senha;
    this.loginUsuarioService.verificarLoginUsuario(this.login.email).then((json) => {

      this.usuario = <Usuario>(json);
      if (this.usuario.id !== 0) 
      {
        this.loginUsuarioService.verificarLoginUsuarioSenha(this.login.email, this.login.senha).then((json) => {
          this.usuario = <Usuario>(json);
          if (this.usuario === null) {
            this.exibirMensagem('Senha incorreta');
          } else {
            localStorage.setItem('idUsuarioLogado', JSON.stringify(this.usuario.id));
            this.navController.navigateBack('/inicio-usuario');
          }
        }).catch((erro) => {
          this.exibirMensagem("Erro ao verificar senha! Erro:" + erro['menssage'])
        });
      } else {
        this.exibirMensagem('Email não cadastrado');
      }
    }).catch((erro) => {
      this.exibirMensagem("Erro ao verificar email! Erro:" + erro['menssage'])
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