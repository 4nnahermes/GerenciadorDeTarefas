import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private proxId = 6;
  listaTarefas: Tarefa[] = [];

  inserir(tarefa: any) {
    tarefa.id = this.proxId++;
    this.listaTarefas.push(tarefa);
  }

  listar() {
    return this.listaTarefas;
  }

  excluir(id?: number) {
    const indice = this.getIndice(id);
    if (indice >= 0) {
      this.listaTarefas.splice(indice, 1);
    }
  }

  editar(id: number, tarefa: Tarefa) {
    const indice = this.getIndice(id);
    if (indice >= 0) {
      this.listaTarefas[indice] = tarefa;
    }
  }

  buscarPorId(id?: number) {
    const tarefa = this.listaTarefas.find(
      tarefa => tarefa.id == id
    );
    return Object.assign({}, tarefa);
  }

  private getIndice(id?: number) {
    return this.listaTarefas.findIndex(
      tarefa => tarefa.id == id
    );
  }
}
