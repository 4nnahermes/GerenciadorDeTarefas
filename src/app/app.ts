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
  
}
