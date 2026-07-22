package br.com.athenassys.api.controller;

import br.com.athenassys.api.dto.DadosCadastroRestaurante;
import br.com.athenassys.api.dto.DadosListagemRestaurante;
import br.com.athenassys.api.model.Restaurante;
import br.com.athenassys.api.repository.RestauranteRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("login")
public class RestauranteController {

    @Autowired
    private RestauranteRepository repository;

    @PostMapping
    @Transactional
    public void cadastrar(@RequestBody @Valid DadosCadastroRestaurante dados) {
        repository.save(new Restaurante(dados));
    }

    @GetMapping
    public Page<DadosListagemRestaurante> listar(Pageable paginacao) {
        return repository.findAll(paginacao)
                .map(DadosListagemRestaurante::new);
    }
}
