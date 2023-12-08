package br.projeto.foodPa.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 *
 * @author dougl
 */
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Produto {
    private int id;
    private String nome;
    private String descricao;
    private String foto;
    private int valor;
    private int idRestaurante;
   
}
