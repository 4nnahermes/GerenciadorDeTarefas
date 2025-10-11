import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela-moradores',
  imports: [CommonModule],
  templateUrl: './tabela-moradores.html',
  styleUrl: './tabela-moradores.css'
})
export class TabelaMoradores {
  listaMoradores: any[] = [
    {id: 1, nome: 'João', email: 'joao@example.com', pontuacao: 100},
    {id: 2, nome: 'Maria', email: 'maria@example.com', pontuacao: 200},
    {id: 3, nome: 'José', email: 'jose@example.com', pontuacao: 150}
  ];
}
