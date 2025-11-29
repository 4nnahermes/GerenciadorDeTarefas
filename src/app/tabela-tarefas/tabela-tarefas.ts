import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../tarefa';
import { MoedaPipe } from '../moeda-pipe';
import { ListCardTarefas } from '../list-card-tarefas/list-card-tarefas';
import { RouterLink } from "@angular/router";
import { collection, collectionData, Firestore, orderBy, query, deleteDoc, doc, getDocs, where } from '@angular/fire/firestore';
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
  private firestore = inject(Firestore);

  constructor() {
   this.listar();
  }

  listar() {
    const tarefasCollection = collection(this.firestore, 'tarefas');
    const queryTarefas = query(tarefasCollection, orderBy('titulo', 'asc'));
    collectionData<Tarefa>(queryTarefas, { idField: 'id' }).subscribe(tarefas => {
      if (tarefas && (tarefas as Tarefa[]).length > 0) {
        this.listaTarefas.set(tarefas as Tarefa[]);
      } else {
        alert('Nenhuma tarefa disponível para listar.');
      }
    });
  }

  async deletar(id?: number) {
    if (id === undefined || id === null) return;

    const tarefasCollection = collection(this.firestore, 'tarefas');
    const queryTarefas = query(tarefasCollection, where('id', '==', id));

    const docs = await getDocs(queryTarefas as any);

    for (const buscaDocs of docs.docs) {
      const data = buscaDocs.data() as Tarefa;
      await deleteDoc(doc(this.firestore, 'tarefas', buscaDocs.id));
      alert(`Tarefa ${data?.titulo?.toUpperCase()} excluída com sucesso!`);
    }

    this.listar();
  }
}
