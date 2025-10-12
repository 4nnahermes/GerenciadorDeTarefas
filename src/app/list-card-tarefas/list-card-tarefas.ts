import { Component } from '@angular/core';
import { CardTarefa } from '../card-tarefa/card-tarefa';

@Component({
  selector: 'app-list-card-tarefas',
  imports: [CardTarefa],
  templateUrl: './list-card-tarefas.html',
  styleUrl: './list-card-tarefas.css'
})
export class ListCardTarefas {
  listaTarefas: any[] = [
    {id: 1, titulo: 'Varrer a casa', descricao: 'Varrer a casa toda', pontos: 5, concluida: false, usuario: 'João'},
    {id: 2, titulo: 'Lavar a louça', descricao: 'Lavar a louça do almoço', pontos: 3, concluida: true, usuario: 'Maria'},
    {id: 3, titulo: 'Tirar o lixo', descricao: 'Tirar os lixos de toda casa', pontos: 2, concluida: false, usuario: 'Carlos'},
    {id: 4, titulo: 'Trocar as roupas de cama', descricao: 'Trocar as roupas de cama da casa toda', pontos: 4, concluida: true, usuario: 'Ana'},
    {id: 5, titulo: 'Limpar o banheiro', descricao: 'Limpar o banheiro todo', pontos: 3, concluida: false, usuario: 'Pedro'}
  ];
}
