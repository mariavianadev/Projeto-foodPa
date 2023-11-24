package br.projeto.foodPa.service;

import br.projeto.foodPa.dao.AvaliacaoDao;
import br.projeto.foodPa.model.Avaliacao;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

@Service
public class AvaliacaoService {
    
    private final AvaliacaoDao avaliacaoDao;
    
    public AvaliacaoService(Jdbi jdbi){
        this.avaliacaoDao = jdbi.onDemand(AvaliacaoDao.class);
    }
    
    public Avaliacao inserir (Avaliacao avaliacao){
        int idAvaliacao = avaliacaoDao.insert(avaliacao);
        avaliacao.setId(idAvaliacao);
        return avaliacao;
    }
    
    // Consulta pelo Email.
    public List<Avaliacao> consultarTodos(){
        return avaliacaoDao.getAll();
    }
    
    public Avaliacao consultarPorId(int id){
        return avaliacaoDao.get(id);
    }

    public Avaliacao consultarPorIdProdutoEidUsuario(int idUsuario, int idProduto){
        return avaliacaoDao.getAvaliacaoPorIdProdutoEidUsuario(idUsuario, idProduto);
    }

    
    
    public void alterar(Avaliacao avaliacao){
        avaliacaoDao.update(avaliacao);
    }
    
    public void excluir(int id){
        avaliacaoDao.delete(id);
    }
    
}