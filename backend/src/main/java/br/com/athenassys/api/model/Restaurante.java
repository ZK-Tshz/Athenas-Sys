package br.com.athenassys.api.model;

import br.com.athenassys.api.dto.DadosCadastroRestaurante;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "")
@Entity(name = "Restaurante")

@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Restaurante {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String email;
    private String telefone;
    private String cnpj;
    private String senha;

    public Restaurante(DadosCadastroRestaurante dados) {

    }
}
