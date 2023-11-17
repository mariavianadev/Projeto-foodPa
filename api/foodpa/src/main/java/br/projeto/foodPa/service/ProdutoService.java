package br.projeto.foodPa.service;

import br.projeto.foodPa.dao.ProdutoDao;
import br.projeto.foodPa.model.Produto;
import br.projeto.foodPa.model.Usuario;

import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

@Service
public class ProdutoService {
    
    private final ProdutoDao produtoDao;
    
    public ProdutoService(Jdbi jdbi){
        this.produtoDao = jdbi.onDemand(ProdutoDao.class);
    }
    
    public Produto inserir(Produto produto){
        int idProduto = produtoDao.insert(produto);
        produto.setId(idProduto);
        return produto;
    }
    
    public List<Produto> consultarTodos(){
        return produtoDao.getAll();
    }
    
    public Produto consultarPorId(int id){
        return produtoDao.get(id);
    }
    
     public Produto consultarProdutoPorNome(String nome) {
        return produtoDao.getNome(nome);
    }

    public void alterar(Produto produto){
        produtoDao.update(produto);
    }

    public int updateFoto(String foto, int id){
        return produtoDao.updateFoto(foto, id);
    }
    
    public void excluir(int id){
        produtoDao.delete(id);
    }
}
