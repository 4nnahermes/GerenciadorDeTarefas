import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Morador } from '../morador';
import { MoedaPipe } from '../moeda-pipe';
import { FiltroPesquisaPipe } from '../filtro-pesquisa-pipe';
import { RouterLink } from '@angular/router';
import { collection, collectionData, deleteDoc, doc, Firestore, getDocs, orderBy, query, where } from '@angular/fire/firestore';

@Component({
  selector: 'app-tabela-moradores',
  imports: [CommonModule, MoedaPipe, FormsModule, FiltroPesquisaPipe, RouterLink],
  templateUrl: './tabela-moradores.html',
  styleUrl: './tabela-moradores.css'
})
export class TabelaMoradores {
  listaMoradores = signal<Morador[]>([]);
  nomePesquisa: string = '';
  private firestore = inject(Firestore);

  constructor() {
    this.listar();
  }

  listar() {
    const moradoresCollection = collection(this.firestore, 'moradores');
    const queryMoradores = query(moradoresCollection, orderBy('nome', 'asc'));
    collectionData<Morador>(queryMoradores, { idField: 'id' }).subscribe(moradores => {
      if (moradores && (moradores as Morador[]).length > 0) {
        this.listaMoradores.set(moradores as Morador[]);
      } else {
        alert('Nenhum morador disponível para listar.');
      }
    });
  }

  async deletar(id?: number) {
    if (id === undefined || id === null) return;

    const moradoresCollection = collection(this.firestore, 'moradores');
    const queryMoradores = query(moradoresCollection, where('id', '==', id));

    const docs = await getDocs(queryMoradores as any);

    for (const buscaDocs of docs.docs) {
      const data = buscaDocs.data() as Morador;
      await deleteDoc(doc(this.firestore, 'moradores', buscaDocs.id));
      alert(`Morador ${data?.nome?.toUpperCase()} excluído com sucesso!`);
    }

    this.listar();
  }
}
