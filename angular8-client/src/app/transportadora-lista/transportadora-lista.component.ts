import { Observable } from "rxjs";
import { TransportadoraService } from "../transportadora.service";
import { Transportadora } from "../transportadora";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Listener } from 'selenium-webdriver';

@Component({
  selector: "app-transportadora-lista",
  templateUrl: "./transportadora-lista.component.html",
  styleUrls: ["./transportadora-lista.component.css"]
})
export class TransportadoraListaComponent implements OnInit {
  transportadoras: Observable<Transportadora[]>;
  bairros: Observable<Object>;
  localizacoes: Observable<Object>;
  modais: Observable<Object>;



  constructor(private transportadoraService: TransportadoraService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.transportadoras = null;
    this.bairros = this.transportadoraService.getBairros();
    this.transportadoras = this.transportadoraService.getTransportadoraLista();
    this.localizacoes = this.transportadoraService.getLocalizacoes();
    this.modais = this.transportadoraService.getModais();


  }
 
  transportadoraUpdate(id: number){
    this.router.navigate(['update', id]);
  }

  
}