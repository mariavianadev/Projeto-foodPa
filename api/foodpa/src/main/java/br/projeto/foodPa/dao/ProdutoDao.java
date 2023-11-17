package br.projeto.foodPa.dao;

import java.util.List;
import br.projeto.foodPa.model.Produto;
import br.projeto.foodPa.model.Restaurante;

import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

@RegisterBeanMapper(Produto.class)
public interface ProdutoDao {
    
        @GetGeneratedKeys
        @SqlUpdate("insert into produto (nome, descricao, foto, valor, idRestaurante) values (:nome, :descricao, :foto, :valor, :idRestaurante);")
        int insert(@BindBean Produto produto);
    
    @SqlQuery("select * " +
            " from produto " +
            " where id = :idProduto;")
    Produto get(@Bind("idProduto") int idProduto);

     @SqlQuery("select * " +
            " from produto " +
            " order by nome;")
    List<Produto> getAll();

    @SqlUpdate("update produto" +
           "  set nome = :nome, " +
           " descricao = :descricao, " +
           " foto = :foto, " +
           " valor = :valor, " + // Adicionei a propriedade valor
           " idRestaurante = :idRestaurante " + // Adicionei a propriedade Restaurante_id
           "  where id = :id;")
    int update(@BindBean Produto produto);
    
    @SqlUpdate("delete " +
            " from produto " +
            " where id = :id;")
    int delete(@Bind("id") int id);
    
    @SqlQuery("select * " +
        " from produto " +
        " where nome = :nome;")
        Produto getNome(@Bind("nome") String nome);

        @SqlUpdate("update produto " +
        " set foto = :foto " +
        " where id = :id;")
        int updateFoto(@Bind("foto") String foto, @Bind("id") int id);
}
