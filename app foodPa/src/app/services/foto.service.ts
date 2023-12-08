import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Foto } from '../model/foto';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  url: string = 'https://api-aplicativo08.odiloncorrea.tech/foto';  
  url2: string = 'https://api-aplicativo08.odiloncorrea.tech/upload';  

  constructor(private httpClient: HttpClient) {
  }

  async salvar(foto: Foto) {
    if(foto.id === 0){
      return await this.httpClient.post(this.url, JSON.stringify(foto), this.httpHeaders).toPromise();
    }else{
      return await this.httpClient.put(this.url, JSON.stringify(foto), this.httpHeaders).toPromise();
    }
  }

  async excluir(id: number){
    let urlAuxiliar = this.url + "/" + id;
    return await this.httpClient.delete(urlAuxiliar).toPromise();
  }

  async listar(){
    let urlAuxiliar = this.url;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

  async listarPorIdPonto(idUsuario: number){
    let urlAuxiliar = this.url + "/" + idUsuario + "/ponto";
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }
  
  async buscarPorId(id: number){
    let urlAuxiliar = this.url + "/" + id;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }


  async registrar(idUsuario: Number) {
    const fotoCapturada = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    let nomeImagem = new Date().getTime() +"."+ fotoCapturada.format;
    this.upload(fotoCapturada, nomeImagem);

    let foto = new Foto();
    foto.imagem = nomeImagem;
    foto.data = new Date(Date.now()).toISOString();
    foto.idUsuario = idUsuario;

    return await this.salvar(foto);
  }

  private async upload(photo: Photo, nomeImagem: string){
    let response = await fetch(photo.webPath!);
    let blob = await response.blob();

    const formData = new FormData();
    formData.append('file', blob, nomeImagem);
    
    await this.httpClient.post(this.url2, formData).toPromise();
  }

}
