package br.projeto.foodPa.controller;

import br.projeto.foodPa.model.Restaurante;
import br.projeto.foodPa.model.Usuario;
import br.projeto.foodPa.service.RestauranteService;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author dougl
 */
@RestController
@CrossOrigin("*")
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

    @GetMapping("/{email}/existe")
    public Restaurante consultarRestaurantePorEmail(@PathVariable("email") String email){
        Restaurante ret = restauranteService.consultarRestaurantePorEmail(email);
        return ret;
    }

    
    @GetMapping("/{email}/{senha}/authenticate")
    public Restaurante Logar(@PathVariable("email") String email, @PathVariable("senha") String senha){
        Restaurante ret = restauranteService.logar(email, senha);
        return ret;
    }
    
    @PostMapping({"", "/"})
    public Restaurante inserir(@RequestBody Restaurante restaurante){
        System.out.println(restaurante);
        Restaurante ret = restauranteService.inserir(restaurante);
        System.out.println(ret);
        return ret;
    }
    
    @PutMapping({"", "/"})
    public Restaurante alterar(@RequestBody Restaurante restaurante){
        restauranteService.alterar(restaurante);
        return restaurante;
    }
    
    @DeleteMapping("/{id}")
    public Restaurante excluir(@PathVariable("id") int id){
        Restaurante restaurante = restauranteService.consultarPorId(id);
        if (restaurante == null){
            throw new RuntimeException("Nao existe restaurante com este id para ser excluido....");
        }
        restauranteService.excluir(id);
        return restaurante;
    }

    private String diretorio = "C:\\xampp\\htdocs\\img";
    @PostMapping(path = "/foto/{id}", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public ResponseEntity<Object> saveEmployee(@RequestParam("file") MultipartFile document, @PathVariable(value = "id") int id) {
        System.out.println("RestauranteController.saveEmployee(" +document.getOriginalFilename()+ ")");
        try {

            // Gere um nome de arquivo único com UUID
            java.util.UUID uuid = java.util.UUID.randomUUID();
            String fileName = uuid.toString();

            //Nome do arquivo
            //String fileName = "teste";
            String originalFileName = document.getOriginalFilename();
            String fileExtension = originalFileName.substring(originalFileName.lastIndexOf("."));

            // Construa o caminho completo para o arquivo
            java.nio.file.Path filePath = Paths.get(diretorio, fileName);

            // Salve o arquivo no diretório
            File file = new File(diretorio, fileName + fileExtension);
            document.transferTo(file);

            // Salve apenas o caminho no banco de dados...
            String imageUrl = "http://localhost/img/"+ fileName + fileExtension;
            return ResponseEntity.status(HttpStatus.OK).body(restauranteService.updateFoto(imageUrl, id));
                   } catch (IOException e) {
            // Tratar exceção de leitura de arquivo
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao processar o arquivo.");
        }
    }

}