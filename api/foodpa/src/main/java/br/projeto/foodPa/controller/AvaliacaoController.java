package br.projeto.foodPa.controller;

import br.projeto.foodPa.model.Avaliacao;
import br.projeto.foodPa.model.Produto;
import br.projeto.foodPa.service.AvaliacaoService;
import br.projeto.foodPa.service.ProdutoService;
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
@RequestMapping("/api/v1/avaliacao")
public class AvaliacaoController {
    
    private final AvaliacaoService avaliacaoService;
    private final ProdutoService produtoService; // Adicione esta linha
    
    public AvaliacaoController(AvaliacaoService avaliacaoService, ProdutoService produtoService){ // Adicione ProdutoService aqui
        this.avaliacaoService = avaliacaoService;
        this.produtoService = produtoService; // Adicione esta linha
    }
    
    @GetMapping({"/", ""})
    public List<Avaliacao> consultarTodos(){
        List<Avaliacao> avaliacaoList = avaliacaoService.consultarTodos();
        return avaliacaoList;
    }
    
    @GetMapping("/{id}")
    public Avaliacao consultarAvaliacao(@PathVariable("id") int id){
        Avaliacao ret = avaliacaoService.consultarPorId(id);
        return ret;
    }
    
    @PostMapping({"", "/"})
    public ResponseEntity<String> inserir(@RequestBody Avaliacao avaliacao){
        Produto produto = produtoService.consultarPorId(avaliacao.getIdProduto());
        if (produto == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("O idProduto informado não existe na tabela produto.");
        }

        Avaliacao usu = avaliacaoService.inserir(avaliacao);
        return ResponseEntity.status(HttpStatus.CREATED).body("Avaliação inserida com sucesso.");
    }

    
    @PutMapping({"", "/"})
    public Avaliacao alterar(@RequestBody Avaliacao avaliacao){
        avaliacaoService.alterar(avaliacao);
        return avaliacao;
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<String> excluir(@PathVariable("id") int id){
        Avaliacao avaliacao = avaliacaoService.consultarPorId(id);
        if (avaliacao == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("A avaliação com o ID informado não existe.");
        }
        
        avaliacaoService.excluir(id);
        return ResponseEntity.status(HttpStatus.OK).body("Avaliação excluída com sucesso.");
    }

}