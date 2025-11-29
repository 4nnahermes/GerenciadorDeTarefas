import { Injectable } from '@angular/core';
import { Morador } from './morador';

@Injectable({
  providedIn: 'root'
})
export class MoradorService {
    listaMoradores: Morador[] = [
    { id: 1, nome: 'João', email: 'joao@example.com', pontuacao: 100 },
    { id: 2, nome: 'Maria', email: 'maria@example.com', pontuacao: 200 },
    { id: 3, nome: 'Carlos', email: 'carlos@example.com', pontuacao: 150 },
    { id: 4, nome: 'Ana', email: 'ana@example.com', pontuacao: 250 },
    { id: 5, nome: 'Pedro', email: 'pedro@example.com', pontuacao: 300 }
  ];

  inserir(morador: any) {
    this.listaMoradores.push(morador);
  }
  
  listar() {
    return this.listaMoradores;
  }
  
}
