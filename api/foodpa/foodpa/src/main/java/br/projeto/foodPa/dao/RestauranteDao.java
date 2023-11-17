/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.projeto.foodPa.dao;

import br.projeto.foodPa.model.Restaurante;
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
    @SqlUpdate("insert into restaurante (endereco, nome, cmpj) values (:endereco, :nome, :cnpj)")
    int insert(@BindBean Restaurante restaurante);
    
    
    @SqlQuery("select * " +
            " from restaurante " +
            " where id = :id;")
    Restaurante get(@Bind("id") int id);

    
    @SqlQuery("select * " +
            " from restaurante " +
            " order by nome;")
    List<Restaurante> getAll();

    
    @SqlQuery("select * " +
            " from restaurante " +
            " where nome like :nome " +
            " order by nome;")
    List<Restaurante> getAllByName(@Bind("nome") String nome);


    @SqlUpdate("update from restaurante " +
            " set nome = :nome, " +
            "     idade = :idade " +
            " where id = :id;")
    int update(@BindBean Restaurante restaurante);

    
    @SqlUpdate("delete " +
            " from restaurante " +
            " where id = :id;")
    int delete(@Bind("id") int id);

}