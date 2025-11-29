import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoradorService } from '../morador-service';
import { Morador } from '../morador';

@Component({
  selector: 'app-form-moradores',
  imports: [FormsModule],
  templateUrl: './form-moradores.html',
  styleUrl: './form-moradores.css'
})
export class FormMoradores {
  morador = new Morador();
  moradorService = inject(MoradorService);

  cadastrarMorador() {
    this.moradorService.inserir(this.morador);
    alert('Morador cadastrado com sucesso!');
    this.morador = new Morador();
  }
}