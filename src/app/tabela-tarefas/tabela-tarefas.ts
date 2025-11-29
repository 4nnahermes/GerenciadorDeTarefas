import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TarefaService } from '../tarefa-service';
import { Tarefa } from '../tarefa';
import { MoedaPipe } from '../moeda-pipe';
import { FiltroPesquisaPipe } from '../filtro-pesquisa-pipe';

@Component({
  selector: 'app-tabela-tarefas',
  imports: [CommonModule, MoedaPipe, FormsModule, FiltroPesquisaPipe],
  templateUrl: './tabela-tarefas.html',
  styleUrl: './tabela-tarefas.css'
})
export class TabelaTarefas {
  listaTarefas: Tarefa[] = [];
  tituloPesquisa: string = '';
  private tarefaService = inject(TarefaService);

  constructor() {
    this.listaTarefas = this.tarefaService.listar();
  }
}
