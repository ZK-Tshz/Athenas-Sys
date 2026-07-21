import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class LoginComponent {

  /* VARIÁVEIS DO FORMULÁRIO */

  usuario: string = '';

  senha: string = '';

  lembrarLogin: boolean = false;

  feedbackMensagem: string = '';

  /* MÉTODO DE LOGIN */

  fazerLogin(event: Event): void {

    // Impede que o formulário recarregue a página
    event.preventDefault();

    // Remove espaços antes e depois do texto
    const usuario = this.usuario.trim();
    const senha = this.senha.trim();

    // Validação dos campos
    if (!usuario || !senha) {

      this.feedbackMensagem =
        'Por favor, preencha todos os campos obrigatórios.';

      return;

    }

    // Login temporário (será substituído pela API)
    this.feedbackMensagem =
      `Sucesso! Operador "${usuario}" conectado com sucesso.`;

    // Aqui futuramente será feita a autenticação
    // com Spring Boot + JWT

  }

}