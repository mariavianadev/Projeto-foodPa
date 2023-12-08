package br.projeto.foodPa.controller;

import br.projeto.foodPa.model.AvaliacaoProduto;
import br.projeto.foodPa.model.Produto;
import br.projeto.foodPa.model.Produto;
import br.projeto.foodPa.service.AvaliacaoProdutoService;
import br.projeto.foodPa.service.ProdutoService;
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
@RequestMapping("/api/v1/avaliacao/produto")

public class AvaliacaoProdutoController {
    
    private final AvaliacaoProdutoService avaliacaoProdutoService;
    private final ProdutoService produtoService; 
    
    public AvaliacaoProdutoController(AvaliacaoProdutoService avaliacaoProdutoService, ProdutoService produtoService){
        this.avaliacaoProdutoService = avaliacaoProdutoService;
        this.produtoService = produtoService;
    }
    
    @GetMapping({"/", ""})
    public List<AvaliacaoProduto> consultarTodos(){
        List<AvaliacaoProduto> avaliacaoList = avaliacaoProdutoService.consultarTodos();
        return avaliacaoList;
    }
    
    
    @GetMapping({"/{id}"})
    public List<AvaliacaoProduto> consultarTodosPorProduto(@PathVariable("id") int id){
        List<AvaliacaoProduto> avaliacaoList = avaliacaoProdutoService.consultarTodosPorProduto(id);
        return avaliacaoList;
    }
    
    @PostMapping({"/produto", "" })
    public ResponseEntity<String> inserirAvaliacaoProduto(@RequestBody AvaliacaoProduto avaliacao){
        Produto produto = produtoService.consultarPorId(avaliacao.getIdProduto());
        if (produto == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("O idProduto informado não existe na tabela produto.");
        }

        AvaliacaoProduto usu = avaliacaoProdutoService.inserir(avaliacao);
        return ResponseEntity.status(HttpStatus.CREATED).body("Avaliação inserida com sucesso.");
    }

    @GetMapping("/{idProduto}/{idUsuario}/byProduto")
    public AvaliacaoProduto consultarAvaliacaoPorIdProdutoEIdUsuario(@PathVariable("idProduto") int idProduto, @PathVariable("idUsuario") int idUsuario){
        AvaliacaoProduto ret = avaliacaoProdutoService.consultarPorIdProdutoEidUsuario(idProduto, idUsuario);
        return ret;
    }
    
    @PutMapping({"", "/{id}"})
    public AvaliacaoProduto alterar(@RequestBody AvaliacaoProduto avaliacao){
        AvaliacaoProduto avaliacao2 = avaliacaoProdutoService.consultarPorId(avaliacao.getId());
        if (avaliacao2 == null)
        {
            throw new RuntimeException( "Nao existe Avaliacao com esse idAvaliacao para ser alterar");
        }
        avaliacaoProdutoService.alterar(avaliacao);
        return avaliacao;

        // avaliacaoProdutoService.alterar(avaliacao);
        // return avaliacao;
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<String> excluir(@PathVariable("id") int id){
        AvaliacaoProduto avaliacao = avaliacaoProdutoService.consultarPorId(id);
        if (avaliacao == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("A avaliação com o ID informado não existe.");
        }
        
        avaliacaoProdutoService.excluir(id);
        return ResponseEntity.status(HttpStatus.OK).body("Avaliação excluída com sucesso.");
    }

}