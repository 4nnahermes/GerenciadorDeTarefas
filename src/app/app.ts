import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from "@angular/router";
import { Login } from './login/login';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  logado = false;
  auth = inject(Auth);
  private router = inject(Router);

  constructor() {
    this.atualizarLogin();
  }

  atualizarLogin() {
    if (localStorage.getItem('credencial')) {
      this.logado = true;
      this.router.navigate(['/tabela-tarefas']);
    } else {
      this.logado = false;
      this.router.navigate(['/login']);
    }
  }

  realizarLogout(event?: Event) {
    this.logado = false;
    localStorage.removeItem('credencial');
    this.router.navigate(['/login']);

    signOut(this.auth).catch(() => {});
  }
}
