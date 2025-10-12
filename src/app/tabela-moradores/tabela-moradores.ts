import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-moradores',
  imports: [CommonModule],
  templateUrl: './tabela-moradores.html',
  styleUrl: './tabela-moradores.css'
})
export class TabelaMoradores {
  @Input() lista: any[] = [];
}
