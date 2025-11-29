import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTarefa } from '../card-tarefa/card-tarefa';
import { TarefaService } from '../tarefa-service';
import { Tarefa } from '../tarefa';
import { MoedaPipe } from '../moeda-pipe';

@Component({
  selector: 'app-list-card-tarefas',
  imports: [CommonModule, CardTarefa, MoedaPipe],
  templateUrl: './list-card-tarefas.html',
  styleUrl: './list-card-tarefas.css'
})
export class ListCardTarefas {
  listaTarefas: Tarefa[] = [];
  private tarefaService = inject(TarefaService);

  constructor() {
    this.listaTarefas = this.tarefaService.listar();
  }
}
