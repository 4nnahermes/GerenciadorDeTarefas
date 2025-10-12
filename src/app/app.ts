import { Component } from '@angular/core';
import { TabelaTarefas } from './tabela-tarefas/tabela-tarefas';
import { FormTarefas } from './form-tarefas/form-tarefas';
import { TabelaMoradores } from './tabela-moradores/tabela-moradores';
import { FormMoradores } from './form-moradores/form-moradores';
import { ListCardTarefas } from './list-card-tarefas/list-card-tarefas';

@Component({
  selector: 'app-root',
  imports: [TabelaTarefas, FormTarefas, TabelaMoradores, FormMoradores, ListCardTarefas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  listaTarefas: any[] = [
    { id: 1, titulo: 'Varrer a casa', descricao: 'Varrer a casa toda', pontos: 5, concluida: false, usuario: 'João', imagem: '' },
    { id: 2, titulo: 'Lavar a louça', descricao: 'Lavar a louça do almoço', pontos: 3, concluida: true, usuario: 'Maria', imagem: '' },
    { id: 3, titulo: 'Tirar o lixo', descricao: 'Tirar os lixos de toda casa', pontos: 2, concluida: false, usuario: 'Carlos', imagem: '' },
    { id: 4, titulo: 'Lavar roupas', descricao: 'Lavar as roupas da casa toda', pontos: 4, concluida: true, usuario: 'Ana', imagem: '' },
    { id: 5, titulo: 'Limpar o banheiro', descricao: 'Limpar o banheiro todo', pontos: 3, concluida: false, usuario: 'Pedro', imagem: '' }
  ]

  listaMoradores: any[] = [
    { id: 1, nome: 'João', email: 'joao@example.com', pontuacao: 100 },
    { id: 2, nome: 'Maria', email: 'maria@example.com', pontuacao: 200 },
    { id: 3, nome: 'Carlos', email: 'carlos@example.com', pontuacao: 150 },
    { id: 4, nome: 'Ana', email: 'ana@example.com', pontuacao: 250 },
    { id: 5, nome: 'Pedro', email: 'pedro@example.com', pontuacao: 300 }
  ];

  addTarefa(tarefa: any) {
    this.listaTarefas.push(tarefa);
  }

  addMorador(morador: any) {
    this.listaMoradores.push(morador);
  }
}
