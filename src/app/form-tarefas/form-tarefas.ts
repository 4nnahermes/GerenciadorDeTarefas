import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TarefaService } from '../tarefa-service';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-form-tarefas',
  imports: [FormsModule],
  templateUrl: './form-tarefas.html',
  styleUrls: ['./form-tarefas.css']
})
export class FormTarefas {
  tarefa = new Tarefa();
  tarefaService = inject(TarefaService);

  cadastrarTarefa() {
    this.tarefaService.inserir(this.tarefa);
    alert('Tarefa cadastrada com sucesso!');
    this.tarefa = new Tarefa();
  }
}