import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-tarefas',
  imports: [FormsModule],
  templateUrl: './form-tarefas.html',
  styleUrl: './form-tarefas.css'
})
export class FormTarefas {
  tarefa: any = { id: 0, titulo: '', descricao: '', pontos: 0, concluida: false, usuario: '' };
  @Output() onSalvar = new EventEmitter<any>();

  cadastrarTarefa() {
    this.onSalvar.emit(this.tarefa);
    alert('Tarefa cadastrada com sucesso!');
    this.tarefa = { id: 0, titulo: '', descricao: '', pontos: 0, concluida: false, usuario: '' };
  }
}