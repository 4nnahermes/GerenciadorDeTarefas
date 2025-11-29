import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Morador } from '../morador';
import { ActivatedRoute, Router } from '@angular/router';
import { addDoc, collection, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-form-moradores',
  imports: [FormsModule],
  templateUrl: './form-moradores.html',
  styleUrl: './form-moradores.css'
})
export class FormMoradores {
  id?: string;
  morador = signal<Morador>(new Morador());
  botaoAcao = 'Cadastrar';

  route = inject(ActivatedRoute);
  router = inject(Router);
  private firestore = inject(Firestore);

  constructor() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.botaoAcao = 'Editar';
      const moradorDocRef = doc(this.firestore, 'moradores', this.id);
      docData<Morador>(moradorDocRef, { idField: 'id' }).subscribe(docVal => {
        if (docVal) this.morador.set(docVal as Morador);
      });
    }
  }

  async salvar() {
    if (this.id) {
      const moradorDocRef = doc(this.firestore, 'moradores', String(this.id));
      const moradorAtualizado = this.getMorador();
      await updateDoc(moradorDocRef, moradorAtualizado);
      alert(`Morador ${moradorAtualizado.nome?.toUpperCase()} editado com sucesso!`);
      this.router.navigate(['/tabela-moradores']);
    }
    else {
      const moradorCollection = collection(this.firestore, "moradores");
      const novoMorador = this.getMorador();

      const docRef = await addDoc(moradorCollection, novoMorador);
      await updateDoc(docRef, { id: docRef.id });
      alert(`Morador ${novoMorador.nome?.toUpperCase()} cadastrado com sucesso!`);
      this.morador.set(new Morador());
      this.router.navigate(['/tabela-moradores']);
    }
  }

  voltar() {
    this.router.navigate(['/tabela-moradores']);
  }

  private getMorador(): Partial<Morador> {
    return {
      nome: this.morador().nome ?? '',
      email: this.morador().email ?? '',
      pontuacao: this.morador().pontuacao ?? 0
    };
  }
}