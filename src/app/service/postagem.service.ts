import { Observable } from 'rxjs';
import { Postagem } from './../model/Postagem';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class PostagemService {
  constructor(private http: HttpClient) {}

  //colocar o token no header da requisição
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  getAllPostagens(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(
      'https://backendthiagofaccipieri.herokuapp.com/postagens',
      this.token
    );
  }

  getByIdPostagem(id: number): Observable<Postagem> {
    return this.http.get<Postagem>(
      `https://backendthiagofaccipieri.herokuapp.com/postagens/${id}`,
      this.token
    );
  }

  getByTituloPostagem(titulo: string): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(
      `https://backendthiagofaccipieri.herokuapp.com/postagens/titulo/${titulo}`,
      this.token
    );
  }

  postPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>(
      'https://backendthiagofaccipieri.herokuapp.com/postagens',
      postagem,
      this.token
    );
  }

  putPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.put<Postagem>(
      'https://backendthiagofaccipieri.herokuapp.com/postagens',
      postagem,
      this.token
    );
  }

  deletePostagem(id: number) {
    return this.http.delete(
      `https://backendthiagofaccipieri.herokuapp.com/postagens/${id}`,
      this.token
    );
  }
}
