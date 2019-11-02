import { TransportadoraDetalhesComponent } from '../transportadora-detalhes/transportadora-detalhes.component';
import { Observable } from "rxjs";
import { TransportadoraService } from "../transportadora.service";
import { Transportadora } from "../transportadora";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-transportadora-lista",
  templateUrl: "./transportadora-lista.component.html",
  styleUrls: ["./transportadora-lista.component.css"]
})
export class TransportadoraListaComponent implements OnInit {
  transportadoras: Observable<Transportadora[]>;

  constructor(private transportadoraService: TransportadoraService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.transportadoras = null;
    this.transportadoras = this.transportadoraService.getTransportadoraLista();
  }
 
 
  deleteTransportadora(id: number) {
    this.transportadoraService.deleteTransportadora(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  transportadoraDetails(id: number){
    this.router.navigate(['details', id]);
  }

  transportadoraUpdate(id: number){
    this.router.navigate(['update', id]);
  }

  
}