import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Tarefa } from './tarefa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaApiService {
  BASE_API = 'http://localhost:3000/tarefas';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private http = inject(HttpClient);

  listar(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.BASE_API);
  }

  inserir(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.BASE_API, tarefa, this.httpOptions);
  }

  editar(id: number, tarefa: Tarefa): Observable<Tarefa> {
    const uri = this.BASE_API + '/' + id;
    return this.http.put<Tarefa>(uri, tarefa, this.httpOptions);
  }

  deletar(id?: number): Observable<Tarefa> {
    return this.http.delete<Tarefa>(`${this.BASE_API}/${id}`, this.httpOptions);
  }

  buscarPorId(id: number): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${this.BASE_API}/${id}`, this.httpOptions);
  }

}
