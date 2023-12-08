package br.projeto.foodPa.controller;

import br.projeto.foodPa.model.Produto;
import br.projeto.foodPa.model.Restaurante;
import br.projeto.foodPa.service.ProdutoService;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
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
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author dougl
 */
@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/produto")
public class ProdutoController {
    
    private final ProdutoService produtoService;
    
    public ProdutoController(ProdutoService produtoService){
        this.produtoService = produtoService;
    }
    
    @GetMapping({"/", ""})
    public List<Produto> consultarTodos(){
        List<Produto> produtoList = produtoService.consultarTodos();
        return produtoList;
    }
    
    @GetMapping("/{id}")
    public Produto consultarProduto(@PathVariable("id") int id){
        Produto pro = produtoService.consultarPorId(id);
        return pro;
    }

    @GetMapping("/{nome}/existe")
    public Produto consultarProdutoPorNome(@PathVariable("nome") String nome){
        Produto ret = produtoService.consultarProdutoPorNome(nome);
        return ret;
    }
    
    @PostMapping({"", "/"})
    public Produto inserir(@RequestBody Produto produto){
        System.out.println(produto);
        Produto pro = produtoService.inserir(produto);
        return pro;
    }
    
    @PutMapping({"", "/"})
    public Produto alterar(@RequestBody Produto produto){
        produtoService.alterar(produto);
        return produto;
    }
    
    @DeleteMapping("/{id}")
    public Produto excluir(@PathVariable("id") int id){
        Produto produto = produtoService.consultarPorId(id);
        if (produto == null){
            throw new RuntimeException("Nao existe produto com este id para ser excluido....");
        }
        produtoService.excluir(id);
        return produto;
    }

    @GetMapping("/byRestaurante/{idRestaurante}")
    public List<Produto> consultarPorId(@PathVariable("idRestaurante") int idRestaurante){
        List<Produto> produtoList = produtoService.consultarPorIdRestaurante(idRestaurante);
        return produtoList;
    }

    private String diretorio = "D:\\Escola\\Programação para Web\\3 Ano\\foodPa v.2\\foto";
    @PostMapping("/{id}")
    
    public ResponseEntity<Object> salvarFoto(
            @RequestPart MultipartFile document, @PathVariable(value = "id") int id) {
        
        System.out.println("ProdutoController.salvarFoto(" +document.getOriginalFilename()+ ")");
        try {

            java.util.UUID uuid = java.util.UUID.randomUUID();
            String fileName = uuid.toString();

            String originalFileName = document.getOriginalFilename();
            String fileExtension = originalFileName.substring(originalFileName.lastIndexOf("."));

            java.nio.file.Path filePath = Paths.get(diretorio, fileName);

            File file = new File(diretorio, fileName + fileExtension);
            document.transferTo(file);

            String imageUrl = diretorio + "\\" + fileName + fileExtension;
            return ResponseEntity.status(HttpStatus.OK).body(produtoService.updateFoto(imageUrl, id));
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao processar o arquivo.");
        }
    }
}