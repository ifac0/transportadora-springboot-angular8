import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransportadoraDetalhesComponent } from './transportadora-detalhes/transportadora-detalhes.component';
import { TransportadoraListaComponent } from './transportadora-lista/transportadora-lista.component';
import { TransportadoraCadastroComponent } from './transportadora-cadastro/transportadora-cadastro.component';
import { TransportadoraAtualizaComponent } from './transportadora-atualiza/transportadora-atualiza.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PipesModule } from 'w-ng5';


@NgModule({
  declarations: [
    AppComponent,
    TransportadoraDetalhesComponent,
    TransportadoraListaComponent,
    TransportadoraCadastroComponent,
    TransportadoraAtualizaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
