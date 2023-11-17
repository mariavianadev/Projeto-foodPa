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
public class Restaurante {
    private int id;
    private String endereco;
    private String nome;
    private String CNPJ;
}
