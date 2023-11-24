export class Restaurante {
  id: number;
    nome: string;
    cnpj: number;
    telefone: number;
    endereco: string;
    email: string;
    senha: string;
    categoria: string;
    
    constructor(){
      this.id = 0;
        this.nome = "";
        this.cnpj = 0;
        this.telefone = 0;
        this.endereco = "";
        this.email = "";
        this.senha = "";  
        this.categoria = "";
    }

}
