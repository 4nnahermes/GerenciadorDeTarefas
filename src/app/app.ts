import { Component } from '@angular/core';
import { TabelaTarefas } from './tabela-tarefas/tabela-tarefas';
import { FormTarefas } from './form-tarefas/form-tarefas';
import { TabelaMoradores } from './tabela-moradores/tabela-moradores';
import { FormMoradores } from './form-moradores/form-moradores';

@Component({
  selector: 'app-root',
  imports: [TabelaTarefas, FormTarefas, TabelaMoradores, FormMoradores],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
