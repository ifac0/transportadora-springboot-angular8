import { TransportadoraService } from '../transportadora.service';
import { Transportadora } from '../transportadora';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgxViacepService, Endereco, ErroCep, ErrorValues } from '@brunoc/ngx-viacep';
import emailMask from 'text-mask-addons/dist/emailMask'

@Component({
  selector: 'app-transportadora-cadastro',
  templateUrl: './transportadora-cadastro.component.html',
  styleUrls: ['./transportadora-cadastro.component.css']
})
export class TransportadoraCadastroComponent implements OnInit {

  transportadora: Transportadora = new Transportadora();
  submitted = false;
  public mask9 = ['(', /[1-9]/, /\d/,')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  public mask8 = ['(', /[1-9]/, /\d/,')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  public maskemail = emailMask

  constructor(private transportadoraService: TransportadoraService,
    private viacep: NgxViacepService,
    private router: Router) { }

  ngOnInit() {
  }

  newTransportadora(): void {
    this.submitted = false;
    this.transportadora = new Transportadora();
  }

  buscarCep(){
    this.viacep.buscarPorCep(this.transportadora.cep).then( 
      ( endereco: Endereco ) => {
        console.log(endereco);
        this.transportadora.uf = endereco.uf;
        this.transportadora.cidade = endereco.localidade;
        this.transportadora.bairro = endereco.bairro;
        this.transportadora.rua = endereco.logradouro;        
     }).catch( (error: ErroCep) => {
        console.log(error.message);
     });
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