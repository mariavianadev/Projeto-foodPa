package br.projeto.foodPa.service;

import br.projeto.foodPa.dao.AvaliacaoRestauranteDao;
import br.projeto.foodPa.model.AvaliacaoRestaurante;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

@Service
public class AvaliacaoRestauranteService {
    
    private final AvaliacaoRestauranteDao avaliacaorestauranteDao;
    
    public AvaliacaoRestauranteService(Jdbi jdbi){
        this.avaliacaorestauranteDao = jdbi.onDemand(AvaliacaoRestauranteDao.class);
    }
    
    public AvaliacaoRestaurante inserir (AvaliacaoRestaurante avaliacao){
        int idAvaliacao = avaliacaorestauranteDao.insert(avaliacao);
        avaliacao.setId(idAvaliacao);
        return avaliacao;
    }
    
    // Consulta pelo Email.
    public List<AvaliacaoRestaurante> consultarTodos(){
        return avaliacaorestauranteDao.getAll();
    }
    
    public AvaliacaoRestaurante consultarPorId(int id){
        return avaliacaorestauranteDao.get(id);
    }

    public List<AvaliacaoRestaurante> consultarTodosPorRestaurante(int id){
        return avaliacaorestauranteDao.getAllByRestaurante(id);
    }

    public AvaliacaoRestaurante consultarPorIdRestauranteEidUsuario(int idUsuario, int idRestaurante){
        return avaliacaorestauranteDao.getAvaliacaoPorIdRestauranteEidUsuario(idUsuario, idRestaurante);
    }

    
    
    public void alterar(AvaliacaoRestaurante avaliacao){
        avaliacaorestauranteDao.update(avaliacao);
    }
    
    public void excluir(int id){
        avaliacaorestauranteDao.delete(id);
    }
    
}