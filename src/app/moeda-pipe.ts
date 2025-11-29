import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moeda'
})
export class MoedaPipe implements PipeTransform {

  transform(pontuacao: number | undefined): string {
    if(!pontuacao) return "R$ 0,00";
    
    const pontuacaoDecimal = pontuacao.toFixed(2);
    const pontuacaoBr = pontuacaoDecimal.replace('.', ',');
    const pontuacaoMoeda = `R$ ${pontuacaoBr}`;
    return pontuacaoMoeda;
  }
}
