/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.projeto.foodPa.service;

import br.projeto.foodPa.dao.RestauranteDao;
import br.projeto.foodPa.model.Restaurante;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

/**
 *
 * @author dougl
 */
@Service
public class RestauranteService {
    
    private final RestauranteDao restauranteDao;
    
    public RestauranteService(Jdbi jdbi){
        this.restauranteDao = jdbi.onDemand(RestauranteDao.class);
    }
    
    public Restaurante inserir (Restaurante restaurante){
        int idRestaurante = restauranteDao.insert(restaurante);
        restaurante.setId(idRestaurante);
        return restaurante;
    }
    
    public List<Restaurante> consultarTodos(){
        return restauranteDao.getAll();
    }
    
    public Restaurante consultarPorId(int id){
        return restauranteDao.get(id);
    }
    
    public void alterar(Restaurante restaurante){
        restauranteDao.update(restaurante);
    }
    
    public void excluir(int id){
        restauranteDao.delete(id);
    }
    
}