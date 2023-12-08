package br.projeto.foodPa.controller;

import br.projeto.foodPa.model.AvaliacaoProduto;
import br.projeto.foodPa.model.AvaliacaoRestaurante;
import br.projeto.foodPa.model.Restaurante;
import br.projeto.foodPa.model.Restaurante;
import br.projeto.foodPa.service.AvaliacaoRestauranteService;
import br.projeto.foodPa.service.RestauranteService;
import br.projeto.foodPa.service.RestauranteService;

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
@RequestMapping("/api/v1/avaliacao/restaurante")
public class AvaliacaoRestauranteController {
    
    private final AvaliacaoRestauranteService avaliacaoRestauranteService;
    private final RestauranteService restauranteService;
    
    public AvaliacaoRestauranteController(AvaliacaoRestauranteService avaliacaoRestauranteService,RestauranteService restauranteService){ // Adicione RestauranteService aqui
        this.avaliacaoRestauranteService = avaliacaoRestauranteService;
        this.restauranteService = restauranteService;
    }
    
    @GetMapping({"/", ""})
    public List<AvaliacaoRestaurante> consultarTodos(){
        List<AvaliacaoRestaurante> avaliacaoList = avaliacaoRestauranteService.consultarTodos();
        return avaliacaoList;
    }
    
    @GetMapping({"/{id}"})
    public List<AvaliacaoRestaurante> consultarTodosPorAvaliacao(@PathVariable("id") int id){
        List<AvaliacaoRestaurante> avaliacaoList = avaliacaoRestauranteService.consultarTodosPorRestaurante(id);
        return avaliacaoList;
    }

    @PostMapping({"/restaurante", ""})
    public ResponseEntity<String> inserirAvaliacaoRestaurante(@RequestBody AvaliacaoRestaurante avaliacao){
        Restaurante restaurante = restauranteService.consultarPorId(avaliacao.getIdRestaurante());
        if (restaurante == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("O idRestaurante informado não existe na tabela restaurante.");
        }

        AvaliacaoRestaurante usu = avaliacaoRestauranteService.inserir(avaliacao);
        return ResponseEntity.status(HttpStatus.CREATED).body("Avaliação inserida com sucesso.");
    }

    @GetMapping("/{idRestaurante}/{idUsuario}/byRestaurante")
    public AvaliacaoRestaurante consultarAvaliacaoPorIdRestaurante(@PathVariable("idRestaurante") int idRestaurante, @PathVariable("idUsuario") int idUsuario){
        AvaliacaoRestaurante ret = avaliacaoRestauranteService.consultarPorIdRestauranteEidUsuario(idRestaurante, idUsuario);
        return ret;
    }
    
    @PutMapping({"", "/{id}"})
     public AvaliacaoRestaurante alterar(@RequestBody AvaliacaoRestaurante avaliacao){
        AvaliacaoRestaurante avaliacao2 = avaliacaoRestauranteService.consultarPorId(avaliacao.getId());
        if (avaliacao2 == null)
        {
            throw new RuntimeException( "Nao existe Avaliacao com esse idAvaliacao para ser alterar");
        }
        avaliacaoRestauranteService.alterar(avaliacao);
        return avaliacao;

        // avaliacaoProdutoService.alterar(avaliacao);
        // return avaliacao;
    }

    
    @DeleteMapping("/{id}")
    public ResponseEntity<String> excluir(@PathVariable("id") int id){
        AvaliacaoRestaurante avaliacao = avaliacaoRestauranteService.consultarPorId(id);
        if (avaliacao == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("A avaliação com o ID informado não existe.");
        }
        
        avaliacaoRestauranteService.excluir(id);
        return ResponseEntity.status(HttpStatus.OK).body("Avaliação excluída com sucesso.");
    }

}