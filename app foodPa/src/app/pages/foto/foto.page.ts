import { Component, OnInit } from '@angular/core';

import { Foto } from 'src/app/model/foto';
import { Restaurante } from 'src/app/model/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { FotoService } from 'src/app/services/foto.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { catchError } from 'rxjs';
@Component({
  selector: 'app-foto',
  templateUrl: './foto.page.html',
  styleUrls: ['./foto.page.scss'],
})
export class FotoPage implements OnInit {
  fotos: Foto[];
  restaurante: Restaurante;
  foto: any;
  file: any;

  constructor(private activatedRoute: ActivatedRoute, private restauranteService: RestauranteService, 
    private formBuilder: FormBuilder, public fotoService: FotoService, public actionSheetController: ActionSheetController, 
    private loadingController: LoadingController, private navController: NavController, private httpClient: HttpClient, 
    private toastr: ToastController,) {
    this.fotos = [];
    this.restaurante = new Restaurante();
    
  }

  ngOnInit() {
  }

  registarFoto(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      if (!file.type.includes('image')) {
        this.toastr.create({
          message: 'Imagem deve ser um .jpg, .jpeg ou .png',
          duration: 1500
        });
        return;
      }
      this.file = file;
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
      this.foto = reader.result;
      };
    }
  }

  async excluirFoto(idFoto: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Fotos',
      buttons: [{
        text: 'Excluir',
        icon: 'trash',
        handler: () => {
          this.fotoService.excluir(idFoto).then(() => {
            this.carregarLista();
          })
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
      }]
    });
    await actionSheet.present();
  }

  async salvar() {
   
    let id = this.activatedRoute.snapshot.params['id'];
    if (id !== null) {
      await this.restauranteService.salvarFoto(this.file, id).then((json) =>{
        console.log(json);
      }).catch((erro) => {
        console.log('Erro: ', erro)
      });
      console.log("a");
    }
  }

  async carregarLista() {
    this.exibirLoader();
    await this.fotoService.buscarPorId(this.restaurante.id).then((json) => {
      this.fotos = <Foto[]>(json);
      this.fecharLoader();
    });

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
}
