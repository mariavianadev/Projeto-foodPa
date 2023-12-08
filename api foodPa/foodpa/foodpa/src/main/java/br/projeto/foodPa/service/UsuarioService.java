package br.projeto.foodPa.service;

import br.projeto.foodPa.dao.UsuarioDao;
import br.projeto.foodPa.model.Usuario;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {
    
    private final UsuarioDao usuarioDao;
    
    public UsuarioService(Jdbi jdbi){
        this.usuarioDao = jdbi.onDemand(UsuarioDao.class);
    }
    
    public Usuario inserir (Usuario usuario){
        int idUsuario = usuarioDao.insert(usuario);
        usuario.setId(idUsuario);
        return usuario;
    }
    
    // Consulta pelo Email.
    public List<Usuario> consultarTodos(){
        return usuarioDao.getAll();
    }
    
    public Usuario consultarPorId(int id){
        return usuarioDao.get(id);
    }
    
    public void alterar(Usuario usuario){
        usuarioDao.update(usuario);
    }
    
    public void excluir(int id){
        usuarioDao.delete(id);
    }

    public Usuario consultarUsuarioPorEmail(String email) {
        return usuarioDao.getEmail(email);
    }

    public Usuario logar(String email, String senha) {
        return usuarioDao.logar(email, senha);
    }

    
    
}