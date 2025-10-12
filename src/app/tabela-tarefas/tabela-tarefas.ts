import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-tarefas',
  imports: [CommonModule],
  templateUrl: './tabela-tarefas.html',
  styleUrl: './tabela-tarefas.css'
})
export class TabelaTarefas {
  @Input() lista: any[] = [];
}
