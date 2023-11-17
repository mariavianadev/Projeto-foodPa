/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.projeto.foodPa.dao;

import br.projeto.foodPa.model.Restaurante;
import br.projeto.foodPa.model.Usuario;

import java.util.List;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

/**
 *
 * @author dougl
 */
@RegisterBeanMapper(Restaurante.class)
public interface RestauranteDao {
    
    @GetGeneratedKeys
    @SqlUpdate("insert into restaurante (nome, cnpj, endereco, email, senha, telefone, foto) values ( :nome, :cnpj, :endereco, :email, :senha, :telefone, :foto)")
    int insert(@BindBean Restaurante restaurante);
    
    
    @SqlQuery("select * " +
            " from restaurante " +
            " where id = :idRestaurante;")
    Restaurante get(@Bind("idRestaurante") int idRestaurante);

    
    @SqlQuery("select * " +
            " from restaurante " +
            " order by nome;")
    List<Restaurante> getAll();

    
    @SqlQuery("select * " +
            " from restaurante " +
            " where nome like :nome " +
            " order by nome;")
    List<Restaurante> getAllByName(@Bind("nome") String nome);


    @SqlUpdate("update restaurante " +
            " set nome = :nome,    " +
            "     cnpj = :cnpj,     " +
            " endereco = :endereco, " +
            " email = :email, " +
            " senha = :senha, " +
            " telefone = :telefone, " +
            " foto = :foto" +
            " where id = :id;")
    int update(@BindBean Restaurante restaurante);

    
    @SqlUpdate("delete " +
            " from restaurante " +
            " where id = :id;")
    int delete(@Bind("id") int id);

 @SqlQuery("select * " +
        " from restaurante " +
        " where email = :email;")
        Restaurante getEmail(@Bind("email") String email);

        @SqlQuery("select * " +
        " from restaurante " +
        " where email = :email" +
        " and senha = :senha")
        Restaurante logar(@Bind("email")String email, @Bind("senha") String senha);

        @SqlUpdate("update restaurante " +
        " set foto = :foto " +
        " where id = :id;")
        int updateFoto(@Bind("foto") String foto, @Bind("id") int id);

}