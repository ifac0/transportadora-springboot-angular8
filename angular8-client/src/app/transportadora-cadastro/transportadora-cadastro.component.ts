import { TransportadoraService } from '../transportadora.service';
import { Transportadora } from '../transportadora';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transportadora-cadastro',
  templateUrl: './transportadora-cadastro.component.html',
  styleUrls: ['./transportadora-cadastro.component.css']
})
export class TransportadoraCadastroComponent implements OnInit {

  transportadora: Transportadora = new Transportadora();
  submitted = false;

  constructor(private transportadoraService: TransportadoraService,
    private router: Router) { }

  ngOnInit() {
  }

  newTransportadora(): void {
    this.submitted = false;
    this.transportadora = new Transportadora();
  }

  save() {
    this.transportadoraService.createTransportadora(this.transportadora)
      .subscribe(data => console.log(data), error => console.log(error));
    this.transportadora = new Transportadora();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/transportadoras']);
  }
}