export class Produto {
    id: number;
    nome: string;
    valor: number;
    descricao: string;
    idRestaurante: number;

    constructor(){
        this.id =  0;
        this.nome = "";
        this.valor =  0;
        this.descricao = "";
        this.idRestaurante = 0;
    }
}