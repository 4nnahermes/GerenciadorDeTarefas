import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela-tarefas',
  imports: [CommonModule],
  templateUrl: './tabela-tarefas.html',
  styleUrl: './tabela-tarefas.css'
})
export class TabelaTarefas {
  listaTarefas: any[] = [
    {id: 1, titulo: 'Varrer a casa', descricao: 'Varrer a casa toda', concluida: false, usuario: 'João'},
    {id: 2, titulo: 'Lavar a louça', descricao: 'Lavar a louça do almoço', concluida: true, usuario: 'Maria'},
    {id: 3, titulo: 'Tirar o lixo', descricao: 'Tirar os lixos de toda casa', concluida: false, usuario: 'Carlos'},
    {id: 4, titulo: 'Trocar as roupas de cama', descricao: 'Trocar as roupas de cama da casa toda', concluida: true, usuario: 'Ana'},
    {id: 5, titulo: 'Limpar o banheiro', descricao: 'Limpar o banheiro todo', concluida: false, usuario: 'Pedro'}
  ];
}
