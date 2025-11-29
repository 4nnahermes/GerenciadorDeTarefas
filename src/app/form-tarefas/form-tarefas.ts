import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../tarefa';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaApiService } from '../tarefa-api-service';

@Component({
  selector: 'app-form-tarefas',
  imports: [FormsModule],
  templateUrl: './form-tarefas.html',
  styleUrls: ['./form-tarefas.css']
})
export class FormTarefas {
  id?: number;
  tarefa = signal<Tarefa>(new Tarefa());
  botaoAcao = 'Cadastrar';

  tarefaApiService = inject(TarefaApiService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  constructor() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.botaoAcao = 'Editar';
      this.tarefaApiService.buscarPorId(this.id).subscribe(tarefaEncontrada => {
        this.tarefa.set(tarefaEncontrada);
      })
    }
  }

  salvar() {
    if (this.id) {
      this.tarefaApiService.editar(this.id, this.tarefa()).subscribe(tarefaAlterada => {
        alert(`Tarefa ${tarefaAlterada.titulo?.toUpperCase()} editada com sucesso!`);
        this.router.navigate(['/tabela-tarefas']);
      });
    } else {
      this.tarefaApiService.inserir(this.tarefa()).subscribe(
        (tarefa) => {
          alert(`Tarefa ${tarefa.titulo?.toUpperCase()} cadastrada com sucesso!`);
          this.tarefa.set(new Tarefa());
          this.router.navigate(['/tabela-tarefas']);
        }
      );
    }
  }

  voltar() {
    this.router.navigate(['/tabela-tarefas']);
  }
}
