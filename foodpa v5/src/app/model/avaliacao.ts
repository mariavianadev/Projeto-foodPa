export class Avaliacao {
    id: number;
    idRestaurante: number|null;
    idProduto: number|null;
    idUsuario: number;
    nota: number;

    constructor(){
        this.id =  0;
        this.idRestaurante = null;
        this.idProduto = null;
        this.idUsuario =  0;
        this.nota = 0;
    }
}
