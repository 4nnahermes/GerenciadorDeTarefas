import { Pipe, PipeTransform } from '@angular/core';
import { Tarefa } from './tarefa';
import { Morador } from './morador';

@Pipe({
  name: 'filtroPesquisa'
})
export class FiltroPesquisaPipe implements PipeTransform {
  private isTarefa(item: any): item is Tarefa {
    return item && Object.prototype.hasOwnProperty.call(item, 'titulo');
  }

  private normalizeString(s?: string): string {
    if (!s) return '';
    return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  transform(lista: Tarefa[], pesquisa?: string): Tarefa[];
  transform(lista: Morador[], pesquisa?: string): Morador[];
  transform(lista: any[], pesquisa?: string): any[] {
    if (!pesquisa || pesquisa.length < 3) {
      return lista;
    }

    const termo = this.normalizeString(pesquisa);

    const primeiro = (lista as any)[0];
    if (this.isTarefa(primeiro)) {
      return (lista as Tarefa[]).filter(t => this.normalizeString(t.titulo).includes(termo));
    }
    return (lista as Morador[]).filter(m => this.normalizeString(m.nome).includes(termo));
  }
}
