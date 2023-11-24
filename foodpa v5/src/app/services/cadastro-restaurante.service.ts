import { Injectable } from '@angular/core';
import { CadastroRestaurante } from '../model/cadastro-restaurante';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroRestauranteService {
  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  url: string = 'http://localhost:8087/api/v1/restaurante';

  constructor(private httpClient: HttpClient) { }

  async salvar(cadastroRestaurante: CadastroRestaurante){
    
    if(cadastroRestaurante.id === 0){
      return await this.httpClient.post(this.url, JSON.stringify(cadastroRestaurante), this.httpHeaders).toPromise();
    }else{
      return await this.httpClient.put(this.url, JSON.stringify(cadastroRestaurante), this.httpHeaders).toPromise();
    }
  } 
  
  async verificarEmail( email: string){
    let urlAuxiliar = this.url + "/" + email + '/existe';
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

  async listar(){
    return await this.httpClient.get(this.url).toPromise();
  }
  
  async buscarPorId(id: number){
    let urlAuxiliar = this.url + "/" + id;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

  async recuperarSenha(id: String){
    let urlAuxiliar = this.url + "/" + id + "/recover";
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }
}