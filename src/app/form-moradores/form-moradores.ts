import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoradorService } from '../morador-service';
import { Morador } from '../morador';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-moradores',
  imports: [FormsModule],
  templateUrl: './form-moradores.html',
  styleUrl: './form-moradores.css'
})
export class FormMoradores {
  id?: number;
  morador = new Morador();
  botaoAcao = 'Cadastrar';
  moradorService = inject(MoradorService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  constructor() {
    const id = +this.route.snapshot.params['id'];
    if (id) {
      this.id = id;
      this.botaoAcao = 'Editar';
      this.morador = this.moradorService.buscarPorId(id);
    }
  }

  salvar() {
    if (this.id) {
      this.moradorService.editar(this.id, this.morador);
      alert('Morador editado com sucesso!');
      this.router.navigate(['/tabela-moradores']);
    } else {
      this.moradorService.inserir(this.morador);
      alert('Morador cadastrado com sucesso!');
      this.morador = new Morador();
      this.router.navigate(['/tabela-moradores']);
    }
  }

  voltar() {
    this.router.navigate(['/tabela-moradores']);
  }
}