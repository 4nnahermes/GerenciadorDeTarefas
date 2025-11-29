import { Injectable } from '@angular/core';
import { Morador } from './morador';

@Injectable({
  providedIn: 'root'
})
export class MoradorService {
  private proxId = 6;
  listaMoradores: Morador[] = [];

  inserir(morador: any) {
    morador.id = this.proxId++;
    this.listaMoradores.push(morador);
  }

  listar() {
    return this.listaMoradores;
  }

  excluir(id?: number) {
    const indice = this.getIndice(id);
    if (indice >= 0) {
      this.listaMoradores.splice(indice, 1);
    }
  }

  editar(id: number, morador: Morador) {
    const indice = this.getIndice(id);
    if (indice >= 0) {
      this.listaMoradores[indice] = morador;
    }
  }

  buscarPorId(id?: number) {
    const morador = this.listaMoradores.find(
      morador => morador.id == id
    );
    return Object.assign({}, morador);
  }

  private getIndice(id?: number) {
    return this.listaMoradores.findIndex(
      morador => morador.id == id
    );
  }
}
