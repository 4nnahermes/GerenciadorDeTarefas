import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-tarefas',
  imports: [FormsModule, JsonPipe],
  templateUrl: './form-tarefas.html',
  styleUrl: './form-tarefas.css'
})
export class FormTarefas {
  tarefa: any = {id: 0, titulo: '', descricao: '', concluida: false, usuario: ''};
  listaTarefas: any[] = [];

  cadastrarTarefa() {
    this.listaTarefas.push(this.tarefa);
    alert('Tarefa cadastrada com sucesso!');
    this.tarefa = {id: 0, titulo: '', descricao: '', concluida: false, usuario: ''};
  }
}