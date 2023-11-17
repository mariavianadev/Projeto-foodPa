package br.projeto.foodPa.controller;

import br.projeto.foodPa.model.Usuario;
import br.projeto.foodPa.service.UsuarioService;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author dougl
 */
@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/usuario")
public class UsuarioController {
    
    private final UsuarioService usuarioService;
    
    public UsuarioController(UsuarioService usuarioService){
        this.usuarioService = usuarioService;
    }
    
    @GetMapping({"/", ""})
    public List<Usuario> consultarTodos(){
        List<Usuario> usuarioList = usuarioService.consultarTodos();
        return usuarioList;
    }
    
    @GetMapping("/{id}")
    public Usuario consultarUsuario(@PathVariable("id") int id){
        Usuario ret = usuarioService.consultarPorId(id);
        return ret;
    }

    @GetMapping("/{email}/existe")
    public Usuario consultarUsuarioPorEmail(@PathVariable("email") String email){
        Usuario ret = usuarioService.consultarUsuarioPorEmail(email);
        return ret;
    }

    
    @GetMapping("/{email}/{senha}/authenticate")
    public Usuario Logar(@PathVariable("email") String email, @PathVariable("senha") String senha){
        Usuario ret = usuarioService.logar(email, senha);
        return ret;
    }
    

    @PostMapping({"", "/"})
    public Usuario inserir(@RequestBody Usuario usuario){
        Usuario usu = usuarioService.inserir(usuario);
        return usu;
    }
    
    @PutMapping({"", "/"})
    public Usuario alterar(@RequestBody Usuario usuario){
        usuarioService.alterar(usuario);
        return usuario;
    }
    
    @DeleteMapping("/{id}")
    public Usuario excluir(@PathVariable("id") int id){
        Usuario usuario = usuarioService.consultarPorId(id);
        if (usuario == null){
            throw new RuntimeException("Nao existe usuario com este id para ser excluido....");
        }
        usuarioService.excluir(id);
        return usuario;
    }
    
}