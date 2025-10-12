import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardTarefas } from './list-card-tarefas';

describe('ListCardTarefas', () => {
  let component: ListCardTarefas;
  let fixture: ComponentFixture<ListCardTarefas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCardTarefas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCardTarefas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
