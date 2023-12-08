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
public class Reclamacao {
    private int id;
    private String titulo;
    private String descricao;
    private int idUsuario;
}
