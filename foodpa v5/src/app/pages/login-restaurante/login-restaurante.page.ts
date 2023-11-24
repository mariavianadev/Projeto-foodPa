import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { LoginRestaurante } from 'src/app/model/login-restaurante';
import { Restaurante } from 'src/app/model/restaurante';
import { LoginRestauranteService } from 'src/app/services/login-restaurante.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-restaurante.page.html',
  styleUrls: ['./login-restaurante.page.scss'],
})

export class LoginRestaurantePage implements OnInit {
  login: LoginRestaurante;
  formGroup: FormGroup;
  restaurante: Restaurante;
  constructor(private activatedRoute: ActivatedRoute, private toastController: ToastController, 
              private navController: NavController, private formBuilder: FormBuilder, 
              private loginRestauranteService: LoginRestauranteService) {
    this.login = new LoginRestaurante();
    this.restaurante = new Restaurante;
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

  verificarRestaurante() {
    this.login.email = this.formGroup.value.email;
    this.login.senha = this.formGroup.value.senha;
    this.loginRestauranteService.verificarLoginRestaurante(this.login.email).then((json) => {
      this.restaurante = <Restaurante>(json);
      if (this.restaurante.id !== 0) 
      {
        this.loginRestauranteService.verificarLoginRestauranteSenha(this.login.email, this.login.senha).then((json) => {
          this.restaurante = <Restaurante>(json);
          if (this.restaurante === null) {
            this.exibirMensagem('Senha incorreta');
          } else {
            localStorage.setItem('idRestauranteLogado', JSON.stringify(this.restaurante.id));
            this.navController.navigateBack('/inicio-restaurante');
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