import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportadoraAtualizaComponent } from './transportadora-atualiza.component';

describe('TransportadoraAtualizaComponent', () => {
  let component: TransportadoraAtualizaComponent;
  let fixture: ComponentFixture<TransportadoraAtualizaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportadoraAtualizaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportadoraAtualizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
