import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransportadoraListaComponent } from './transportadora-lista/transportadora-lista.component';
import { TransportadoraCadastroComponent } from './transportadora-cadastro/transportadora-cadastro.component';
import { TransportadoraAtualizaComponent } from './transportadora-atualiza/transportadora-atualiza.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PipesModule } from 'w-ng5';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxViacepModule } from '@brunoc/ngx-viacep'; // Importando o módulo


@NgModule({
  declarations: [
    AppComponent,
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
    TextMaskModule,
    NgxViacepModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
