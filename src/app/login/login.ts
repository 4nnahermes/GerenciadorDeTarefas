import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  usuario: any = { email: '', senha: '' };
  @Output() loginRealizado = new EventEmitter();
  auth = inject(Auth);

  realizarLogin(event?: Event) {
    signInWithEmailAndPassword(this.auth, this.usuario.email, this.usuario.senha)
      .then(userCredential => {
        console.log("Credenciais", userCredential);
        localStorage.setItem('credencial', JSON.stringify(userCredential));
        alert("Login realizado com sucesso!");
        this.loginRealizado.emit();
      })
      .catch(error => {
        alert("Usuário ou senha inválidos!");
      });
  }
}
