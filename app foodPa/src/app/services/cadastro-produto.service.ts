import { Injectable } from '@angular/core';
import { CadastroProduto } from '../model/cadastro-produto';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroProdutoService {
  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  url: string = 'http://localhost:8087/api/v1/produto';

  constructor(private httpClient: HttpClient) { }

  async salvar(cadastroProduto: CadastroProduto){
    
    if(cadastroProduto.id === 0){
      return await this.httpClient.post(this.url, JSON.stringify(cadastroProduto), this.httpHeaders).toPromise();
    }else{
      return await this.httpClient.put(this.url, JSON.stringify(cadastroProduto), this.httpHeaders).toPromise();
    }
  } 
  
  async verificarProduto( nome: string){
    let urlAuxiliar = this.url + "/" + nome + '/existe';
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

  async listar(){
    return await this.httpClient.get(this.url).toPromise();
  }
  
  async buscarPorId(id: number){
    let urlAuxiliar = this.url + "/" + id;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

}