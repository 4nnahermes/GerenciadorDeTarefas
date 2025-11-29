import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Morador } from '../morador';
import { MoedaPipe } from '../moeda-pipe';
import { FiltroPesquisaPipe } from '../filtro-pesquisa-pipe';
import { RouterLink } from '@angular/router';
import { MoradorApiService } from '../morador-api-service';

@Component({
  selector: 'app-tabela-moradores',
  imports: [CommonModule, MoedaPipe, FormsModule, FiltroPesquisaPipe, RouterLink],
  templateUrl: './tabela-moradores.html',
  styleUrl: './tabela-moradores.css'
})
export class TabelaMoradores {
  listaMoradores = signal<Morador[]>([]);
  nomePesquisa: string = '';
  private moradorApiService = inject(MoradorApiService);

  constructor() {
    this.listar();
  }

  listar() {
    this.moradorApiService.listar().subscribe((moradores) => {
      this.listaMoradores.set(moradores);
    });
  }

  deletar(id?: number) {
    this.moradorApiService.deletar(id!).subscribe(morador => {
      alert(`Morador ${morador.nome?.toUpperCase()} excluído com sucesso!`);
      this.listar();
    });
  }
}