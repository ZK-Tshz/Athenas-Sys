import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login';
import { MapaMesasComponent } from './features/recepcao/mapa-mesas/mapa-mesas';
import { LancamentoPedidosComponent } from './features/garcom/lancamento-pedidos/lancamento-pedidos';
import { PainelKdsComponent } from './features/cozinha/painel-kds/painel-kds';
import { DashboardComponent } from './features/gerente/dashboard/dashboard';

export const routes: Routes = [
  // 1. Direciona a rota de entrada diretamente para a tela de Login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // 2. Rota de Autenticação
  { path: 'login', component: LoginComponent },
  
  // 3. Rota do Menu de Seleção de Áreas do Restaurante
  
  // 4. Rotas das telas operacionais do sistema
  { path: 'recepcao', component: MapaMesasComponent },
  { path: 'garcom', component: LancamentoPedidosComponent },
  { path: 'cozinha', component: PainelKdsComponent },
  { path: 'gerente', component: DashboardComponent },

  // 5. Rota de segurança: qualquer link inválido redireciona o usuário para o Login
  { path: '**', redirectTo: 'login' }
];