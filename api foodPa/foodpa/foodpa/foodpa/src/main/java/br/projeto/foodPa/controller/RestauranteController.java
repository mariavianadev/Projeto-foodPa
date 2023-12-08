package br.projeto.foodPa.controller;

import br.projeto.foodPa.model.Restaurante;
import br.projeto.foodPa.service.RestauranteService;

import java.util.List;
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
@RequestMapping("/api/v1/restaurante")
public class RestauranteController {
    
    private final RestauranteService restauranteService;
    
    public RestauranteController(RestauranteService restauranteService){
        this.restauranteService = restauranteService;
    }
    
    @GetMapping({"/", ""})
    public List<Restaurante> consultarTodos(){
        List<Restaurante> restauranteList = restauranteService.consultarTodos();
        return restauranteList;
    }
    
    @GetMapping("/{id}")
    public Restaurante consultarRestaurante(@PathVariable("id") int id){
        Restaurante ret = restauranteService.consultarPorId(id);
        return ret;
    }
    
    @PostMapping({"", "/"})
    public Restaurante inserir(@RequestBody Restaurante restaurante){
        Restaurante ret = restauranteService.inserir(restaurante);
        return ret;
    }
    
    @PutMapping({"", "/"})
    public Restaurante alterar(@RequestBody Restaurante restaurante){
        restauranteService.alterar(restaurante);
        return restaurante;
    }
    
    @DeleteMapping("/{id}")
    public Restaurante alterar(@PathVariable("id") int id){
        Restaurante restaurante = restauranteService.consultarPorId(id);
        if (restaurante == null){
            throw new RuntimeException("Nao existe restaurante com este id para ser excluido....");
        }
        restauranteService.excluir(id);
        return restaurante;
    }
}