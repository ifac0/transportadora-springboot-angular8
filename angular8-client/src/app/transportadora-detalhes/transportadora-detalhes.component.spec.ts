import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportadoraDetalhesComponent } from './transportadora-detalhes.component';

describe('TransportadoraDetalhesComponent', () => {
  let component: TransportadoraDetalhesComponent;
  let fixture: ComponentFixture<TransportadoraDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportadoraDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportadoraDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
