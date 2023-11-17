/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.projeto.foodPa.dao;

import br.projeto.foodPa.model.Avaliacao;
import br.projeto.foodPa.model.Reclamacao;
import java.util.List;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

/**
 *
 * author dougl
 */
@RegisterBeanMapper(Reclamacao.class)
public interface ReclamacaoDao {
    
        @GetGeneratedKeys
        @SqlUpdate("insert into reclamacao (titulo, descricao, idUsuario) values (:titulo, :descricao, :idUsuario)")
       int insert(@BindBean Reclamacao reclamacao);
        
        
        
    
    
    @SqlQuery("select * " +
            " from reclamacao " +
            " where id = :idReclamacao;")
    Reclamacao get(@Bind("idReclamacao") int idReclamacao);

    
    @SqlQuery("select * " +
            " from reclamacao " +
            " order by titulo;")
    List<Reclamacao> getAll();

    
    @SqlQuery("select * " +
            " from reclamacao " +
            " where titulo like :titulo " +
            " order by titulo;")
    List<Reclamacao> getAllByTitulo(@Bind("titulo") String titulo);


    @SqlUpdate("update reclamacao " +
            " set titulo = :titulo,    " +
            " descricao = :descricao, " +
            " idUsuario = :idUsuario " +
            " where id = :id;")
    int update(@BindBean Reclamacao reclamacao);

    
    @SqlUpdate("delete " +
            " from reclamacao " +
            " where id = :id;")
    int delete(@Bind("id") int id);

}
