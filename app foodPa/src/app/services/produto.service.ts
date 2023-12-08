import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AvaliacaoProduto } from '../model/avaliacaoProduto';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  url: string = 'http://localhost:8087/api/v1/produto';

  constructor(private httpClient: HttpClient) { }

  async salvar(produto: Produto){
    
    if(produto.id === 0){
      return await this.httpClient.post(this.url, JSON.stringify(produto), this.httpHeaders).toPromise();
    }else{
      return await this.httpClient.put(this.url, JSON.stringify(produto), this.httpHeaders).toPromise();
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

  // /api/v1/avaliacao"
  async avaliarProduto(avaliacao: AvaliacaoProduto){
    
    if (avaliacao.id == 0){
      let urlAuxiliar = "http://localhost:8087/api/v1/avaliacao" + "/produto/";
      return await this.httpClient.post(urlAuxiliar, JSON.stringify(avaliacao), this.httpHeaders).toPromise();
    }else{
      let urlAuxiliar = "http://localhost:8087/api/v1/avaliacao" + "/produto/";
      return await this.httpClient.put(urlAuxiliar, JSON.stringify(avaliacao), this.httpHeaders).toPromise();
    }
  }

  async buscarPorIdRestaurante(idRestaurante: number){
    let urlAuxiliar = this.url + "/byRestaurante/" + idRestaurante;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

  async buscarPorIdProdutoEidUsuario(idProduto: number, idUsuario: number) {
    let urlAuxiliar = "http://localhost:8087/api/v1/avaliacao" + "/produto" + "/" + idProduto + "/" + idUsuario + "/byProduto";
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

  async buscarMediaPorIdProduto(idProduto: number){
    // let urlAuxiliar = "http://localhost:8087/api/v1/avaliacao" + "/avaliacaoProduto/" + idProduto;
    let urlAuxiliar = "http://localhost:8087/api/v1/avaliacao/produto/" + idProduto;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

  async buscarUltimoUsuarioNota(idProduto: number, idUsuario: number){
    let urlAuxiliar = "http://localhost:8087/api/v1/avaliacao/produto/" + idProduto +"/"+ idUsuario + "/byProduto";
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }



  async post(document: File, id: number) {
    return this.httpClient.post(`${this.url}/${id}`, document);
  }

}