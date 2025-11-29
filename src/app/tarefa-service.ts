import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  listaTarefas: Tarefa[] = [
    { id: 1, titulo: 'Varrer a casa', descricao: 'Varrer a casa toda', pontos: 5, concluida: false, usuario: 'João' },
    { id: 2, titulo: 'Lavar a louça', descricao: 'Lavar a louça do almoço', pontos: 3, concluida: true, usuario: 'Maria'},
    { id: 3, titulo: 'Tirar o lixo', descricao: 'Tirar os lixos de toda casa', pontos: 2, concluida: false, usuario: 'Carlos' },
    { id: 4, titulo: 'Lavar roupas', descricao: 'Lavar as roupas da casa toda', pontos: 4, concluida: true, usuario: 'Ana' },
    { id: 5, titulo: 'Limpar o banheiro', descricao: 'Limpar o banheiro todo', pontos: 3, concluida: false, usuario: 'Pedro' }
  ]

  inserir(tarefa: any) {
    this.listaTarefas.push(tarefa);
  }

  listar() {
    return this.listaTarefas;
  }
}
