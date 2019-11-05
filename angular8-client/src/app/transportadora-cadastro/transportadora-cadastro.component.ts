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
  testeemail = false;
  testeempresa = false;
  usuario_validador = '';
  dominio_validador = '';
  public mask9 = ['(', /[1-9]/, /\d/,')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  public mask8 = ['(', /[1-9]/, /\d/,')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  public maskemail = emailMask

  constructor(private transportadoraService: TransportadoraService,
    private viacep: NgxViacepService,
    private router: Router) { }

  ngOnInit() {
    this.transportadora.email = '';
    this.transportadora.empresa = '';
    this.testeemail = true;

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
    this.validacaoEmail(this.transportadora.email);
    if(this.testeemail==true && this.transportadora.empresa.length>4 ){
      this.testeempresa = false;
      this.testeemail = false;

      this.transportadoraService.createTransportadora(this.transportadora)
      .subscribe(data => console.log(data), error => console.log(error));
      this.transportadora = new Transportadora();
      this.gotoList();
    }else{      
      if(this.transportadora.empresa.length<=4){
        this.testeempresa = true;  
      }else{
        this.testeempresa = false;  
      }

    }
  }

  validacaoEmail(field) {
    this.usuario_validador = field.substring(0, field.indexOf("@"));
    this.dominio_validador = field.substring(field.indexOf("@")+ 1, field.length);
     
    if ((this.usuario_validador.length >=1) &&
        (this.dominio_validador.length >=3) && 
        (this.usuario_validador.search("@")==-1) && 
        (this.dominio_validador.search("@")==-1) &&
        (this.usuario_validador.search(" ")==-1) && 
        (this.dominio_validador.search(" ")==-1) &&
        (this.dominio_validador.search(".")!=-1) &&      
        (this.dominio_validador.indexOf(".") >=1)&& 
        (this.dominio_validador.lastIndexOf(".") < this.dominio_validador.length - 1)) {
          this.testeemail=true;
        }else{
          this.testeemail=false;
        }
    }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/transportadoras']);
  }
  
}