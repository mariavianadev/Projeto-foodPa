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

public class Restaurante {
    private int id;
    private String nome;
    private int cnpj;
    private String endereco;
    private String email;
    private String senha;
    private String telefone;
    private String categoria;
    private String foto;
}