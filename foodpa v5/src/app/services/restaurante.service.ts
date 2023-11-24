import { Injectable } from '@angular/core';
import { Restaurante } from '../model/restaurante';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  url: string = 'http://localhost:8087/api/v1/restaurante';

  constructor(private httpClient: HttpClient) { }

  async salvar(restaurante: Restaurante){
    
    if(restaurante.id === 0){
      return await this.httpClient.post(this.url, JSON.stringify(restaurante), this.httpHeaders).toPromise();
    }else{
      return await this.httpClient.put(this.url, JSON.stringify(restaurante), this.httpHeaders).toPromise();
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

  async recuperarSenha(email: string){
    let urlAuxiliar = this.url + "/" + email + "/recover"; 
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

  async salvarFoto(document: File, id: number) {
    let urlAuxiliar = this.url + "/foto/" + id; 
    console.log(id);
    return await this.httpClient.post(`${urlAuxiliar}/${id}`, document);
  }
}
