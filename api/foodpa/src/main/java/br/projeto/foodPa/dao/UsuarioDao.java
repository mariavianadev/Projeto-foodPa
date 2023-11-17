package br.projeto.foodPa.dao;

import java.util.List;
import br.projeto.foodPa.model.Usuario;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

@RegisterBeanMapper(Usuario.class)
public interface UsuarioDao {
    
    @GetGeneratedKeys
    @SqlUpdate("insert into usuario (nome, email, senha) values (:nome, :email, :senha)")
    int insert(@BindBean Usuario usuario);
    
    
    @SqlQuery("select * " +
    " from usuario " +
    " where id = :idUsuario;")
        Usuario get(@Bind("idUsuario") int idUsuario);


     @SqlQuery("select * " +
            "from usuario " +
            "order by email ;")
    List<Usuario> getAll();

    @SqlUpdate("update usuario " +
            " set nome = :nome,    " +
            " email = :email,     " +
            " senha = :senha " +
            " where id = :id;")
    int update(@BindBean Usuario usuario);

    
    @SqlUpdate("delete " +
            " from usuario " +
            " where id = :id;")
    int delete(@Bind("id") int id);


        @SqlQuery("select * " +
        " from usuario " +
        " where email = :email;")
        Usuario getEmail(@Bind("email") String email);

        @SqlQuery("select * " +
        " from usuario " +
        " where email = :email" +
        " and senha = :senha")
        Usuario logar(@Bind("email")String email, @Bind("senha") String senha);
    
}