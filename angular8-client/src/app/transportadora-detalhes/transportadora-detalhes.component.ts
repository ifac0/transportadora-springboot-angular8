import { Transportadora } from '../transportadora';
import { Component, OnInit, Input } from '@angular/core';
import { TransportadoraService } from '../transportadora.service';
import { TransportadoraListaComponent } from '../transportadora-lista/transportadora-lista.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transportadora-detalhes',
  templateUrl: './transportadora-detalhes.component.html',
  styleUrls: ['./transportadora-detalhes.component.css']
})
export class TransportadoraDetalhesComponent implements OnInit {

  id: number;
  transportadora: Transportadora;

  constructor(private route: ActivatedRoute,private router: Router,
    private transportadoraService: TransportadoraService) { }

  ngOnInit() {
    this.transportadora = new Transportadora();

    this.id = this.route.snapshot.params['id'];
    
    this.transportadoraService.getTransportadora(this.id)
      .subscribe(data => {
        console.log(data)
        this.transportadoraService = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['/transportadoras']);
  }
}