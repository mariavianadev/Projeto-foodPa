/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.projeto.foodPa.dao;

import br.projeto.foodPa.model.AvaliacaoProduto;
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
@RegisterBeanMapper(AvaliacaoProduto.class)
public interface AvaliacaoProdutoDao {
    
    @GetGeneratedKeys
    @SqlUpdate("insert into avaliacaoProduto (nota, idProduto, idUsuario) values ( :nota, :idProduto, :idUsuario)")
    int insert(@BindBean AvaliacaoProduto avalaicaoProduto);
    
    
    @SqlQuery("select * " +
            " from avaliacaoProduto " +
            " where id = :idAvaliacao;")
    AvaliacaoProduto get(@Bind("idAvaliacao") int idAvaliacao);
    
        @SqlUpdate("update avaliacaoProduto " +
            " set nota = :nota" +
            " where id = :id;")
    int update(@BindBean AvaliacaoProduto avaliacaoProduto);

    @SqlQuery("SELECT * " +
    "FROM avaliacaoProduto " +
    "WHERE idUsuario = :idUsuario AND idProduto = :idProduto")
AvaliacaoProduto getAvaliacaoPorIdProdutoEidUsuario(@Bind("idProduto") int idProduto, @Bind("idUsuario") int idUsuario);

    
    @SqlQuery("select * " +
            " from avaliacaoProduto " +
            " order by nota;")
    List<AvaliacaoProduto> getAll();

    
    @SqlQuery("select * " +
            " from avaliacaoProduto " +
            " where nota like :nota " +
            " order by nota;")
    List<AvaliacaoProduto> getAllByName(@Bind("nota") String nota);
    
    @SqlQuery("select * " +
            " from avaliacaoProduto " +
            " where idProduto = :idProduto")
    List<AvaliacaoProduto> getAllByProduto(@Bind("idProduto") int idProduto);




    
    @SqlUpdate("delete " +
            " from avaliacaoProduto " +
            " where id = :id;")
    int delete(@Bind("id") int id);

}