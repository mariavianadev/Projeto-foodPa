/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.projeto.foodPa.dao;

import br.projeto.foodPa.model.Avaliacao;
import br.projeto.foodPa.model.Produto;

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
@RegisterBeanMapper(Avaliacao.class)
public interface AvaliacaoDao {
    
    @GetGeneratedKeys
    @SqlUpdate("insert into avaliacao (nota, idProduto, idRestaurante, idUsuario) values ( :nota, :idProduto, :idRestaurante, :idUsuario)")
    int insert(@BindBean Avaliacao avaliacao);
    
    
    @SqlQuery("select * " +
            " from avaliacao " +
            " where id = :idAvaliacao;")
    Avaliacao get(@Bind("idAvaliacao") int idAvaliacao);

     @SqlQuery("select * " +
            " from avalaicao " +
            " where idUsuario = :idUsuario " +
            " where idProduto = :idProduto; ")
    Avaliacao getAvaliacaoPorIdProdutoEidUsuario(@Bind("idProduto") int idProduto, @Bind("idUsuario") int idUsuario);
    
    @SqlQuery("select * " +
            " from avaliacao " +
            " order by nota;")
    List<Avaliacao> getAll();

    
    @SqlQuery("select * " +
            " from avaliacao " +
            " where nota like :nota " +
            " order by nota;")
    List<Avaliacao> getAllByName(@Bind("nota") String nota);


    @SqlUpdate("update avaliacao " +
            " set nota = :nota," +
            " idProduto = :idProduto," +
            " idRestaurante = :idRestaurante," +
            " idUsuario = :idUsuario" +
            " where id = :id;")
    int update(@BindBean Avaliacao avaliacao);

    
    @SqlUpdate("delete " +
            " from avaliacao " +
            " where id = :id;")
    int delete(@Bind("id") int id);

}