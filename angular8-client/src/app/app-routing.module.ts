import { TransportadoraDetalhesComponent } from './transportadora-detalhes/transportadora-detalhes.component';
import { TransportadoraCadastroComponent } from './transportadora-cadastro/transportadora-cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransportadoraListaComponent } from './transportadora-lista/transportadora-lista.component';
import { TransportadoraAtualizaComponent } from './transportadora-atualiza/transportadora-atualiza.component';

const routes: Routes = [
  { path: '', redirectTo: 'transportadora', pathMatch: 'full' },
  { path: 'transportadaoras', component: TransportadoraListaComponent },
  { path: 'add', component: TransportadoraCadastroComponent },
  { path: 'update/:id', component: TransportadoraAtualizaComponent },
  { path: 'details/:id', component: TransportadoraDetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }