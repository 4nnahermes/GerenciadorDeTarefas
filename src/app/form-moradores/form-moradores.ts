import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoradorService } from '../morador-service';
import { Morador } from '../morador';
import { ActivatedRoute, Router } from '@angular/router';
import { MoradorApiService } from '../morador-api-service';

@Component({
  selector: 'app-form-moradores',
  imports: [FormsModule],
  templateUrl: './form-moradores.html',
  styleUrl: './form-moradores.css'
})
export class FormMoradores {
  id?: number;
  morador = signal<Morador>(new Morador());
  botaoAcao = 'Cadastrar';

  moradorApiService = inject(MoradorApiService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  constructor() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.botaoAcao = 'Editar';
      this.moradorApiService.buscarPorId(this.id).subscribe(moradorEncontrado => {
        this.morador.set(moradorEncontrado);
      })
    }
  }

  salvar() {
    if (this.id) {
      this.moradorApiService.editar(this.id, this.morador()).subscribe(moradorAlterado => {
        alert(`Morador ${moradorAlterado.nome?.toUpperCase()} editado com sucesso!`);
        this.router.navigate(['/tabela-moradores']);
      });
    } else {
      this.moradorApiService.inserir(this.morador()).subscribe(
        (morador) => {
          alert(`Morador ${morador.nome?.toUpperCase()} cadastrado com sucesso!`);
          this.morador.set(new Morador());
          this.router.navigate(['/tabela-moradores']);
        }
      );
    }
  }

  voltar() {
    this.router.navigate(['/tabela-moradores']);
  }
}