import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { CadastroUsuario } from 'src/app/model/cadastro-usuario';
import { CadastroUsuarioService } from 'src/app/services/cadastro-usuario.service';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-registro-CadastroUsuarioService',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {
  cadastro: CadastroUsuario;
  usuario: Usuario;
  formGroup: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private toastController: ToastController, private navController: NavController,
    private formBuilder: FormBuilder, private cadastroUsuarioService: CadastroUsuarioService, private usuarioService: UsuarioService) {
    this.cadastro = new CadastroUsuario();
    this.usuario = new Usuario();

    this.formGroup = formBuilder.group({
      'email': [this.cadastro.email, Validators.compose([
        Validators.required,
      ])],
      'nome': [this.cadastro.nome, Validators.compose([
        Validators.required,
      ])],
      'senha': [this.cadastro.senha, Validators.compose([
        Validators.required,
      ])],
    });
  }

  ngOnInit() {
  }

  async verificarUsuario() {
    let nome = this.formGroup.value.nome;
    let email = this.formGroup.value.email;
    let senha = this.formGroup.value.senha;

    this.cadastroUsuarioService.verificarEmail(email).then((json) => {
      
      if (<Usuario>(json) === null) {
        this.cadastro.email = email;
        this.cadastro.nome = nome;
        this.cadastro.senha = senha;

        this.cadastroUsuarioService.salvar(this.cadastro).then((json) => {
          this.cadastro = <CadastroUsuario>(json);

          if (this.cadastro.id > 0) {
            this.exibirMensagem('Cadastro realizado com sucesso!');
            this.navController.navigateBack("/login-usuario");
          }
        }).catch((erro) => {
          this.exibirMensagem("Erro ao cadastrar usuário! Erro:" + erro['menssage']);
        });

      } else {
        this.exibirMensagem('E-mail já cadastrado');
      }
    }).catch((erro) => {
      this.exibirMensagem("Erro ao verificar email! Erro:" + erro['menssage']);
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