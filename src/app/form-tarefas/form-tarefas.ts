import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TarefaService } from '../tarefa-service';
import { Tarefa } from '../tarefa';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-tarefas',
  imports: [FormsModule ],
  templateUrl: './form-tarefas.html',
  styleUrls: ['./form-tarefas.css']
})
export class FormTarefas {
  id?: number;
  tarefa = new Tarefa();
  botaoAcao = 'Cadastrar';
  tarefaService = inject(TarefaService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  constructor() {
    const id = +this.route.snapshot.params['id'];
    if (id) {
      this.id = id;
      this.botaoAcao = 'Editar';
      this.tarefa = this.tarefaService.buscarPorId(id) || new Tarefa();
    }
  }

  salvar() {
    if (this.id) {
      this.tarefaService.editar(this.id, this.tarefa);
      alert('Tarefa editada com sucesso!');
      this.router.navigate(['/tabela-tarefas']);
    } else {
      this.tarefaService.inserir(this.tarefa);
      alert('Tarefa cadastrada com sucesso!');
      this.tarefa = new Tarefa();
      this.router.navigate(['/tabela-tarefas']);
    }
  }

  voltar() {
    this.router.navigate(['/tabela-tarefas']);
  }
}