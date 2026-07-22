package br.com.athenassys.api.dto;

import br.com.athenassys.api.model.Restaurante;

public record DadosListagemRestaurante(
        String nome,
        String email,
        String telefone,
        String cnpj,
        String senha
) {
    public DadosListagemRestaurante(Restaurante restaurante) {
        this(
                restaurante.getNome(),
                restaurante.getEmail(),
                restaurante.getTelefone(),
                restaurante.getCnpj(),
                restaurante.getSenha());
    }
}
