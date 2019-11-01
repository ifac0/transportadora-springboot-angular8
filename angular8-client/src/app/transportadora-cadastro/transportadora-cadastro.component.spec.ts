import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportadoraCadastroComponent } from './transportadora-cadastro.component';

describe('TransportadoraCadastroComponent', () => {
  let component: TransportadoraCadastroComponent;
  let fixture: ComponentFixture<TransportadoraCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportadoraCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportadoraCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
