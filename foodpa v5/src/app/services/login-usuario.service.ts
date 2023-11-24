import { Injectable } from '@angular/core';
import { LoginUsuario } from '../model/login-usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginUsuarioService {
  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  url: string = 'http://localhost:8087/api/v1/usuario';
                  
  constructor(private httpClient: HttpClient) { }

  async salvar(login: LoginUsuario){
    
    if(login.id === 0){
      return await this.httpClient.post(this.url, JSON.stringify(login), this.httpHeaders).toPromise();
    }else{
      return await this.httpClient.put(this.url, JSON.stringify(login), this.httpHeaders).toPromise();
    }
  } 

  async listar(){
    return await this.httpClient.get(this.url).toPromise();
  }

  async excluir(id: number){
    let urlAuxiliar = this.url + "/" + id;
    return await this.httpClient.delete(urlAuxiliar).toPromise();
  }
  
  async buscarPorId(id: number){
    let urlAuxiliar = this.url + "/" + id;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

  async verificarLoginUsuario( email: string){
    let urlAuxiliar = this.url + "/" + email + '/existe';
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }
  
  async verificarLoginUsuarioSenha(email: string, senha: string){
    let urlAuxiliar = this.url + "/" + email + "/" + senha + '/authenticate';
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }
}
