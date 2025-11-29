import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Morador } from './morador';

@Injectable({
  providedIn: 'root'
})
export class MoradorApiService {
  BASE_API = 'http://localhost:3000/moradores';
    private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private http = inject(HttpClient);

  listar(): Observable<Morador[]> {
    return this.http.get<Morador[]>(this.BASE_API);
  }

  inserir(morador: Morador): Observable<Morador> {
    return this.http.post<Morador>(this.BASE_API, morador, this.httpOptions);
  }

  editar(id: number, morador: Morador): Observable<Morador> {
    const uri = this.BASE_API + '/' + id;
    return this.http.put<Morador>(uri, morador, this.httpOptions);
  }

  deletar(id?: number): Observable<Morador> {
    return this.http.delete<Morador>(`${this.BASE_API}/${id}`, this.httpOptions);
  }

  buscarPorId(id: number): Observable<Morador> {
    return this.http.get<Morador>(`${this.BASE_API}/${id}`, this.httpOptions);
  }
}
