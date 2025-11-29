import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoradorService } from '../morador-service';
import { Morador } from '../morador';
import { MoedaPipe } from '../moeda-pipe';
import { FiltroPesquisaPipe } from '../filtro-pesquisa-pipe';

@Component({
  selector: 'app-tabela-moradores',
  imports: [CommonModule, MoedaPipe, FormsModule, FiltroPesquisaPipe],
  templateUrl: './tabela-moradores.html',
  styleUrl: './tabela-moradores.css'
})
export class TabelaMoradores {
  listaMoradores: Morador[] = [];
  nomePesquisa: string = '';
  private moradorService = inject(MoradorService);

  constructor() {
    this.listaMoradores = this.moradorService.listar();
  }
 
}