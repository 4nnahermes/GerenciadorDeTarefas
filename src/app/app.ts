import { Component } from '@angular/core';
import { TabelaTarefas } from './tabela-tarefas/tabela-tarefas';
import { FormTarefas } from './form-tarefas/form-tarefas';

@Component({
  selector: 'app-root',
  imports: [TabelaTarefas, FormTarefas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
