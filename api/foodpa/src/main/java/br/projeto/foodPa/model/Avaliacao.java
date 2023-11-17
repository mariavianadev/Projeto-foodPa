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
public class Avaliacao {
    private int id;
    private int nota;
    private int idProduto;
    private int idRestaurante;
    private int idUsuario;
   
}
