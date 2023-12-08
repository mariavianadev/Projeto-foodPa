import { Injectable } from '@angular/core';
import { CadastroUsuario } from '../model/cadastro-usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {
  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  url: string = 'http://localhost:8087/api/v1/usuario';

  constructor(private httpClient: HttpClient) { }

  async salvar(cadastroUsuario: CadastroUsuario){
    
    if(cadastroUsuario.id === 0){
      return await this.httpClient.post(this.url, JSON.stringify(cadastroUsuario), this.httpHeaders).toPromise();
    }else{
      return await this.httpClient.put(this.url, JSON.stringify(cadastroUsuario), this.httpHeaders).toPromise();
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