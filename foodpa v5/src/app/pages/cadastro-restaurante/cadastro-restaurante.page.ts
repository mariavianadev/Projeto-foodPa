import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { CadastroRestaurante } from 'src/app/model/cadastro-restaurante';
import { CadastroRestauranteService } from 'src/app/services/cadastro-restaurante.service';
import { Restaurante } from 'src/app/model/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';
@Component({
  selector: 'app-cadastro-restaurante',
  templateUrl: './cadastro-restaurante.page.html',
  styleUrls: ['./cadastro-restaurante.page.scss'],
})


export class CadastroRestaurantePage implements OnInit {
  cadastro: CadastroRestaurante;
  restaurante: Restaurante;
  formGroup: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private toastController: ToastController, private navController: NavController,
    private formBuilder: FormBuilder, private cadastroRestauranteService: CadastroRestauranteService, 
    private restauranteService: RestauranteService) {
    this.cadastro = new CadastroRestaurante();
    this.restaurante = new Restaurante();

    this.formGroup = formBuilder.group({
      'nome': [this.cadastro.nome, Validators.compose([
        Validators.required,Validators.minLength(4)
      ])],
      'cnpj': [this.cadastro.cnpj, Validators.compose([
        Validators.required, Validators.minLength(4), Validators.pattern('^[0-9]*$')
      ])],
      'telefone': [this.cadastro.telefone, Validators.compose([
        Validators.required, Validators.minLength(9), Validators.pattern('^[0-9]*$')
      ])],      
      'endereco': [this.cadastro.endereco, Validators.compose([
        Validators.required,Validators.minLength(4)
      ])],
      'email': [this.cadastro.email, Validators.compose([
        Validators.required,
      ])],
      'categoria': [this.restaurante.categoria, Validators.compose([
        Validators.required
      ])],
      'senha': [this.cadastro.senha, Validators.compose([
        Validators.required,Validators.minLength(6)
      ])],
    });
  }

  ngOnInit() {
  }

  async verificarRestaurante() {
    let nome = this.formGroup.value.nome;
    let cnpj = this.formGroup.value.cnpj;
    let telefone = this.formGroup.value.telefone;
    let endereco = this.formGroup.value.endereco;
    let email = this.formGroup.value.email;
    let categoria = this.formGroup.value.categoria;
    let senha = this.formGroup.value.senha;

    this.cadastroRestauranteService.verificarEmail(email).then((json) => {

      if (this.cadastro.id === 0) {
        this.cadastro.email = email;
        this.cadastro.cnpj = cnpj;
        this.cadastro.telefone = telefone;
        this.cadastro.endereco = endereco;
        this.cadastro.nome = nome;
        this.cadastro.categoria = categoria;
        this.cadastro.senha = senha;

        this.cadastroRestauranteService.salvar(this.cadastro).then((json) => {
          this.cadastro = <CadastroRestaurante>(json);
          console.log(this.cadastro);

          if (this.cadastro.id > 0) {
            this.exibirMensagem('Cadastro realizado com sucesso!');
            let id = this.cadastro.id;
            this.navController.navigateBack("/login-restaurante");
          }

        }).catch((erro) => {
          this.exibirMensagem("Erro ao cadastrar restaurante! Erro:" + erro['menssage']);
          return;
        });

      } else {
        this.exibirMensagem('E-mail já cadastrado');
      }
    }).catch((erro) => {
      this.exibirMensagem("Erro ao verificar email! Erro:" + erro['menssage']);
      return;
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