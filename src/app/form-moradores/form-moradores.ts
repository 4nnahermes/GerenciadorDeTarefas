import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-moradores',
  imports: [FormsModule],
  templateUrl: './form-moradores.html',
  styleUrl: './form-moradores.css'
})
export class FormMoradores {
  morador: any = { id: 0, nome: '', email: '', pontuacao: 0 };
  @Output() onSalvar = new EventEmitter<any>();

  cadastrarMorador() {
    this.onSalvar.emit(this.morador);
    alert('Morador cadastrado com sucesso!');
    this.morador = { id: 0, nome: '', email: '', pontuacao: 0 };
  }
}
