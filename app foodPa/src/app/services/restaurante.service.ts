import { Injectable } from '@angular/core';
import { Restaurante } from '../model/restaurante';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AvaliacaoRestaurante} from '../model/avaliacaoRestaurante';

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


  async avaliarRestaurante(avaliacao: AvaliacaoRestaurante){
    if (avaliacao.id != 0){
      let urlAuxiliar = "http://localhost:8087/api/v1/avaliacao" + "/restaurante/";
      return await this.httpClient.put(urlAuxiliar, JSON.stringify(avaliacao), this.httpHeaders).toPromise();
    }else{
      let urlAuxiliar = "http://localhost:8087/api/v1/avaliacao" + "/restaurante/";
      return await this.httpClient.post(urlAuxiliar, JSON.stringify(avaliacao), this.httpHeaders).toPromise();
    }
  }

  // async buscarPorIdRestaurante(idRestaurante: number){
  //   let urlAuxiliar = this.url + "/byRestaurante/" + idRestaurante;
  //   return await this.httpClient.get(urlAuxiliar).toPromise();
  // }

  async buscarPorIdRestauranteEidUsuario(idRestaurante: number, idUsuario: number){
    let urlAuxiliar = "http://localhost:8087/api/v1/avaliacao" + "/restaurante" + "/" + idRestaurante + "/" + idUsuario + "/byRestaurante";
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

  async buscarMediaPorIdRestaurante(idRestaurante: number){
    // let urlAuxiliar = "http://localhost:8087/api/v1/avaliacao" + "/avaliacaoProduto/" + idProduto;
    let urlAuxiliar = "http://localhost:8087/api/v1/avaliacao/restaurante/" + idRestaurante;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

  async buscarUltimoRestauranteoNota(idProduto: number, idRestaurante: number){
    // let urlAuxiliar = "http://localhost:8087/api/v1/avaliacao/restaurante" + idProduto + idRestaurante + "/byRestaurante";
    let urlAuxiliar = "http://localhost:8087/api/v1/avaliacao" + "/usuarioProduto/" + idProduto + idRestaurante;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

}
