import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-tarefa',
  imports: [],
  templateUrl: './card-tarefa.html',
  styleUrl: './card-tarefa.css'
})
export class CardTarefa {
  @Input() tarefa: any = {id: 1, titulo: 'Varrer a casa', pontos: 5, concluida: false, usuario: 'João'};
}
