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
 
  transportadoraUpdate(id: number){
    this.router.navigate(['update', id]);
  }

  
}