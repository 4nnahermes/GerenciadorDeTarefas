import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../tarefa';
import { MoedaPipe } from '../moeda-pipe';
import { ListCardTarefas } from '../list-card-tarefas/list-card-tarefas';
import { RouterLink } from "@angular/router";
import { TarefaApiService } from '../tarefa-api-service';
import { FiltroPesquisaPipe } from '../filtro-pesquisa-pipe';

@Component({
  selector: 'app-tabela-tarefas',
  imports: [CommonModule, MoedaPipe, FormsModule, ListCardTarefas, RouterLink, FiltroPesquisaPipe],
  templateUrl: './tabela-tarefas.html',
  styleUrl: './tabela-tarefas.css'
})
export class TabelaTarefas {
  listaTarefas = signal<Tarefa[]>([]);
  tituloPesquisa: string = '';
  private tarefaApiService = inject(TarefaApiService);

  constructor() {
   this.listar();
  }

  listar() {
    this.tarefaApiService.listar().subscribe((tarefas) => {
      this.listaTarefas.set(tarefas);
    });
  }

  deletar(id?: number) {
    this.tarefaApiService.deletar(id!).subscribe(tarefa => {
      alert(`Tarefa ${tarefa.titulo?.toUpperCase()} excluída com sucesso!`);
      this.listar();
    });
  }
}
