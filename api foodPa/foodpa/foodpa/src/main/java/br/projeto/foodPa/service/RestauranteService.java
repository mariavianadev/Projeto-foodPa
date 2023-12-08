package br.projeto.foodPa.service;

import br.projeto.foodPa.dao.RestauranteDao;
import br.projeto.foodPa.model.Restaurante;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

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

    public Restaurante consultarRestaurantePorEmail(String email) {
       return  restauranteDao.getEmail(email);
    }

    public int updateFoto(String foto, int id){
        return restauranteDao.updateFoto(foto, id);
    }

    public Restaurante logar(String email, String senha) {
       return restauranteDao.logar(email,senha);
    }
    
}