import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-moradores',
  imports: [FormsModule, JsonPipe],
  templateUrl: './form-moradores.html',
  styleUrl: './form-moradores.css'
})
export class FormMoradores {
  morador: any = {id: 0, nome: '', email: '', pontuacao: 0};
  listaMoradores: any[] = [];

  cadastrarMorador() {
    this.listaMoradores.push(this.morador);
    alert('Morador cadastrado com sucesso!');
    this.morador = {id: 0, nome: '', email: '', pontuacao: 0};
  }
}
