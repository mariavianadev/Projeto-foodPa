package br.projeto.foodPa.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString

public class AvaliacaoProduto {
    private int id;
    private int nota;
    private int idProduto;
    private int idUsuario;   
}