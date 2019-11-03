import { Component, OnInit } from '@angular/core';
import { Transportadora } from '../transportadora';
import { ActivatedRoute, Router } from '@angular/router';
import { TransportadoraService } from '../transportadora.service';

import { NgxViacepService, Endereco, ErroCep, ErrorValues } from '@brunoc/ngx-viacep';
import emailMask from 'text-mask-addons/dist/emailMask'


@Component({
  selector: 'app-transportadora-atualiza',
  templateUrl: './transportadora-atualiza.component.html',
  styleUrls: ['./transportadora-atualiza.component.css']
})
export class TransportadoraAtualizaComponent implements OnInit {

  id: number;
  transportadora: Transportadora;
  public mask9 = ['(', /[1-9]/, /\d/,')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  public mask8 = ['(', /[1-9]/, /\d/,')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  public maskemail = emailMask 

  constructor(private route: ActivatedRoute,private router: Router,
    private transportadoraService: TransportadoraService,
    private viacep: NgxViacepService) { }

  ngOnInit() {
    this.transportadora = new Transportadora();

    this.id = this.route.snapshot.params['id'];
    
    this.transportadoraService.getTransportadora(this.id)
      .subscribe(data => {
        console.log(data)
        this.transportadora = data;
      }, error => console.log(error));     
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
  

  updateTransportadora() {
    this.transportadoraService.updateTransportadora(this.id, this.transportadora)
      .subscribe(data => console.log(data), error => console.log(error));
    this.transportadora = new Transportadora();    
    this.gotoList();
  }

  deleteTransportadora(id: number) {
    this.transportadoraService.deleteTransportadora(id)
      .subscribe(
        data => {
          console.log(data);
          this.gotoList();
        },
        error => console.log(error));
  }

  onSubmit() {
    this.updateTransportadora();    
  }

  gotoList() {
    this.router.navigate(['/transportadoras']);
  }
}