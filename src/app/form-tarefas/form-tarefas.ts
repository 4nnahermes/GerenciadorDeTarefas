import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../tarefa';
import { ActivatedRoute, Router } from '@angular/router';
import { addDoc, collection, Firestore, doc, docData, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-form-tarefas',
  imports: [FormsModule],
  templateUrl: './form-tarefas.html',
  styleUrls: ['./form-tarefas.css']
})
export class FormTarefas {
  id?: string;
  tarefa = signal<Tarefa>(new Tarefa());
  botaoAcao = 'Cadastrar';

  route = inject(ActivatedRoute);
  router = inject(Router);
  private firestore = inject(Firestore);

  constructor() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.botaoAcao = 'Editar';
      const tarefaDocRef = doc(this.firestore, 'tarefas', this.id);
      docData<Tarefa>(tarefaDocRef, { idField: 'id' }).subscribe(docVal => {
        if (docVal) this.tarefa.set(docVal as Tarefa);
      });
    }
  }

  async salvar() {
    if (this.id) {
      const tarefaDocRef = doc(this.firestore, 'tarefas', String(this.id));
      const tarefaAtualizada = this.getTarefa();

      await updateDoc(tarefaDocRef, tarefaAtualizada);
      alert(`Tarefa ${tarefaAtualizada.titulo?.toUpperCase()} editada com sucesso!`);
      this.router.navigate(['/tabela-tarefas']);
    }
    else {
      const tarefaCollection = collection(this.firestore, "tarefas");
      const novaTarefa = this.getTarefa();

      const docRef = await addDoc(tarefaCollection, novaTarefa);
      await updateDoc(docRef, { id: docRef.id });
      alert(`Tarefa ${novaTarefa.titulo?.toUpperCase()} cadastrada com sucesso!`);
      this.tarefa.set(new Tarefa());
      this.router.navigate(['/tabela-tarefas']);
    }
  }

  voltar() {
    this.router.navigate(['/tabela-tarefas']);
  }

  private getTarefa(): Partial<Tarefa> {
    return {
      titulo: this.tarefa().titulo ?? '',
      descricao: this.tarefa().descricao ?? '',
      pontos: this.tarefa().pontos ?? 0,
      concluida: this.tarefa().concluida ?? false,
      usuario: this.tarefa().usuario ?? ''
    };
  }
}
