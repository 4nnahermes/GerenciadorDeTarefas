import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaTarefas } from './tabela-tarefas';

describe('TabelaTarefas', () => {
  let component: TabelaTarefas;
  let fixture: ComponentFixture<TabelaTarefas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaTarefas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaTarefas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
