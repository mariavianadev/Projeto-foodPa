package br.projeto.foodPa.service;

import br.projeto.foodPa.dao.ReclamacaoDao;
import br.projeto.foodPa.model.Reclamacao;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

@Service
public class ReclamacaoService {
    
    private final ReclamacaoDao reclamacaoDao;
    
    public ReclamacaoService(Jdbi jdbi){
        this.reclamacaoDao = jdbi.onDemand(ReclamacaoDao.class);
    }
    
    public Reclamacao inserir(Reclamacao reclamacao){
        int idReclamacao = reclamacaoDao.insert(reclamacao);
        reclamacao.setId(idReclamacao);
        return reclamacao;
    }
    
    
    
    // Consulta pelo Email.
    public List<Reclamacao> consultarTodos(){
        return reclamacaoDao.getAll();
    }
    
    public Reclamacao consultarPorId(int id){
        return reclamacaoDao.get(id);
    }
    
    public void alterar(Reclamacao reclamacao){
        reclamacaoDao.update(reclamacao);
    }
    
    public void excluir(int id){
        reclamacaoDao.delete(id);
    }
    
}