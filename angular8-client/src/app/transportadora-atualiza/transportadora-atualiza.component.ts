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
  testeemail = false;
  testeempresa = false;
  usuario_validador = '';
  dominio_validador = '';
  public mask9 = ['(', /[1-9]/, /\d/,')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  public mask8 = ['(', /[1-9]/, /\d/,')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  public maskemail = emailMask 

  constructor(private route: ActivatedRoute,private router: Router,
    private transportadoraService: TransportadoraService,
    private viacep: NgxViacepService) { }

  ngOnInit() {
    this.transportadora = new Transportadora();
    this.testeemail = true;
    this.testeempresa = false;

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
      this.validacaoEmail(this.transportadora.email);
      if(this.testeemail==true && this.transportadora.empresa.length>4 ){
        this.testeempresa = false;
        this.testeemail = false;

        this.updateTransportadora();  
       }else{        
        if(this.transportadora.empresa.length<4){
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

  gotoList() {
    this.router.navigate(['/transportadoras']);
  }
}