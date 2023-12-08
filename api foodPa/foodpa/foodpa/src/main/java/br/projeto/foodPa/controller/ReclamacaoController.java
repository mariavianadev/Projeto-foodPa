package br.projeto.foodPa.controller;

import br.projeto.foodPa.model.Reclamacao;
import br.projeto.foodPa.model.Restaurante;
import br.projeto.foodPa.service.ReclamacaoService;

import java.util.List;

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
@RequestMapping("/api/v1/reclamacao")
public class ReclamacaoController {
    
    private final ReclamacaoService reclamacaoService;
    
    public ReclamacaoController(ReclamacaoService reclamacaoService){
        this.reclamacaoService = reclamacaoService;
    }
    
    @GetMapping({"/", ""})
    public List<Reclamacao> consultarTodos(){
        List<Reclamacao> reclamacaoList = reclamacaoService.consultarTodos();
        return reclamacaoList;
    }
    
    @GetMapping("/{id}")
    public Reclamacao consultarReclamacao(@PathVariable("id") int id){
        Reclamacao ret = reclamacaoService.consultarPorId(id);
        return ret;
    }
    
  @PostMapping({"", "/"})
    public Reclamacao inserir(@RequestBody Reclamacao reclamacao){
        System.out.println(reclamacao);
        Reclamacao ret = reclamacaoService.inserir(reclamacao);
        System.out.println(ret);
        return ret;
    }
    
    @PutMapping({"", "/"})
    public Reclamacao alterar(@RequestBody Reclamacao reclamacao){
        reclamacaoService.alterar(reclamacao);
        return reclamacao;
    }
    
    
    @DeleteMapping("/{id}")
    public Reclamacao excluir(@PathVariable("id") int id){
        Reclamacao reclamacao = reclamacaoService.consultarPorId(id);
        if (reclamacao == null){
            throw new RuntimeException("Nao existe usuario com este id para ser excluido....");
        }
        reclamacaoService.excluir(id);
        return reclamacao;
    }
}