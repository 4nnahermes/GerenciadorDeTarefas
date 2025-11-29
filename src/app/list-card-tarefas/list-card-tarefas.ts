import { Component, effect, inject, signal, Signal } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CardTarefa } from '../card-tarefa/card-tarefa';
import { Tarefa } from '../tarefa';
import { MoedaPipe } from '../moeda-pipe';
import { TarefaApiService } from '../tarefa-api-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-card-tarefas',
  imports: [CommonModule, CardTarefa, MoedaPipe, AsyncPipe],
  templateUrl: './list-card-tarefas.html',
  styleUrl: './list-card-tarefas.css'
})
export class ListCardTarefas {
  listaTarefas$!: Observable<Tarefa[]>;

  constructor(private tarefaApiService: TarefaApiService) {
    effect(() => {
      this.listaTarefas$ = this.tarefaApiService.listar();
    })
  }
}
