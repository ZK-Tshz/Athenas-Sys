import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  // Dados de entrada que capturam a digitação do usuário
  usuario = '';
  senha = '';
  
  // Feedback visual de validação no próprio HTML
  feedbackMensagem = '';

  fazerLogin(event: Event) {
    event.preventDefault(); // Impede o envio clássico do formulário e o recarregamento da página
    
    if (this.usuario.trim() && this.senha.trim()) {
      this.feedbackMensagem = `Sucesso! Operador "${this.usuario}" conectado com sucesso.`;
    } else {
      this.feedbackMensagem = 'Por favor, preencha todos os campos obrigatórios.';
    }
  }
}