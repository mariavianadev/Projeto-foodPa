package br.projeto.foodPa.dao;

import br.projeto.foodPa.model.AvaliacaoProduto;
import br.projeto.foodPa.model.AvaliacaoRestaurante;
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
@RegisterBeanMapper(AvaliacaoRestaurante.class)
public interface AvaliacaoRestauranteDao {
    
    @GetGeneratedKeys
    @SqlUpdate("insert into avaliacaoRestaurante (nota, idRestaurante, idUsuario) values ( :nota, :idRestaurante, :idUsuario)")
    int insert(@BindBean AvaliacaoRestaurante avaliacaoRestaurante);
    
    
    @SqlQuery("select * " +
            " from avaliacaoRestaurante " +
            " where id = :idAvaliacao;")
    AvaliacaoRestaurante get(@Bind("idAvaliacao") int idAvaliacao);

        @SqlQuery("SELECT * " +
                " from avaliacaoRestaurante " +
            " where idUsuario = :idUsuario AND idRestaurante = :idRestaurante")
        AvaliacaoRestaurante getAvaliacaoPorIdRestauranteEidUsuario(@Bind("idRestaurante") int idRestaurante, @Bind("idUsuario") int idUsuario);

    @SqlQuery("select * " +
            " from avaliacaoRestaurante " +
            " order by nota;")
    List<AvaliacaoRestaurante> getAll();

    
    @SqlQuery("select * " +
            " from avaliacaoRestaurante " +
            " where nota like :nota " +
            " order by nota;")
    List<AvaliacaoRestaurante> getAllByName(@Bind("nota") String nota);

    @SqlQuery("select * " +
            " from avaliacaoRestaurante " +
            " where idRestaurante = :idRestaurante")
    List<AvaliacaoRestaurante> getAllByRestaurante(@Bind("idRestaurante") int idRestaurante);

    @SqlUpdate("update avaliacaoRestaurante " +
            " set nota = :nota" +
            " where id = :id;")
    int update(@BindBean AvaliacaoRestaurante avaliacaoRestaurante);

    
    @SqlUpdate("delete " +
            " from avaliacaoRestaurante " +
            " where id = :id;")
    int delete(@Bind("id") int id);

}