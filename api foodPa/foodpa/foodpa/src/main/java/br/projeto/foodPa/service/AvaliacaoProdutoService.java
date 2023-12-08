package br.projeto.foodPa.service;

import br.projeto.foodPa.dao.AvaliacaoProdutoDao;
import br.projeto.foodPa.model.AvaliacaoProduto;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

@Service
public class AvaliacaoProdutoService {
    
    private final AvaliacaoProdutoDao avaliacaoProdutoDao;
    
    public AvaliacaoProdutoService(Jdbi jdbi){
        this.avaliacaoProdutoDao = jdbi.onDemand(AvaliacaoProdutoDao.class);
    }
    
    public AvaliacaoProduto inserir (AvaliacaoProduto avaliacao){
        int idAvaliacao = avaliacaoProdutoDao.insert(avaliacao);
        avaliacao.setId(idAvaliacao);
        return avaliacao;
    }
    
    // Consulta pelo Email.
    public List<AvaliacaoProduto> consultarTodos(){
        return avaliacaoProdutoDao.getAll();
    }
    
    public List<AvaliacaoProduto> consultarTodosPorProduto(int id){
        return avaliacaoProdutoDao.getAllByProduto(id);
    }
    
    public AvaliacaoProduto consultarPorId(int id){
        return avaliacaoProdutoDao.get(id);
    }

    public AvaliacaoProduto consultarPorIdProdutoEidUsuario(int idUsuario, int idProduto){
        return avaliacaoProdutoDao.getAvaliacaoPorIdProdutoEidUsuario(idUsuario, idProduto);
    }

    public void alterar(AvaliacaoProduto avaliacao){
        avaliacaoProdutoDao.update(avaliacao);
    }
    
    public void excluir(int id){
        avaliacaoProdutoDao.delete(id);
    }
    
}