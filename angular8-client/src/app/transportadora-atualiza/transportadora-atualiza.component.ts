import { Component, OnInit } from '@angular/core';
import { Transportadora } from '../transportadora';
import { ActivatedRoute, Router } from '@angular/router';
import { TransportadoraService } from '../transportadora.service';

@Component({
  selector: 'app-transportadora-atualiza',
  templateUrl: './transportadora-atualiza.component.html',
  styleUrls: ['./transportadora-atualiza.component.css']
})
export class TransportadoraAtualizaComponent implements OnInit {

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
        this.transportadora = data;
      }, error => console.log(error));
  }

  updateTransportadora() {
    this.transportadoraService.updateTransportadora(this.id, this.transportadora)
      .subscribe(data => console.log(data), error => console.log(error));
    this.transportadora = new Transportadora();
    this.gotoList();
  }

  onSubmit() {
    this.updateTransportadora();    
  }

  gotoList() {
    this.router.navigate(['/transportadoras']);
  }
}