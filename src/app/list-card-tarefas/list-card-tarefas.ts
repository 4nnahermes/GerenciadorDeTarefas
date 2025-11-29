import { Component, Signal } from '@angular/core';
import {  CommonModule } from '@angular/common';
import { CardTarefa } from '../card-tarefa/card-tarefa';
import { Tarefa } from '../tarefa';
import { MoedaPipe } from '../moeda-pipe';
import { collection, collectionData, Firestore, orderBy, query } from '@angular/fire/firestore';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-list-card-tarefas',
  imports: [CommonModule, CardTarefa, MoedaPipe ],
  templateUrl: './list-card-tarefas.html',
  styleUrl: './list-card-tarefas.css'
})
export class ListCardTarefas {
  listaTarefas!: Signal<Tarefa[]>;

  constructor(private firestore: Firestore) {
    const tarefasCollection = collection(this.firestore, 'tarefas');
    const queryTarefas = query(tarefasCollection, orderBy('titulo', 'asc'));
    this.listaTarefas = toSignal(collectionData<Tarefa>(queryTarefas, { idField: 'id' }), { initialValue: [] });
  }
}
