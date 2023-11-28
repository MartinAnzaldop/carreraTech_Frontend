import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { COMENTARIO } from '../models/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  url = 'http://localhost:3000/api/comentario/';

  constructor(private http: HttpClient) { }

  guardarComentario(COMENTARIO:COMENTARIO):Observable<any>{
    return this.http.post(this.url, COMENTARIO);
  }
  getComentario():Observable<any>{
    return this.http.get(this.url);
  }

  deleteComentario(id:any):Observable<any>{
    return this.http.delete(this.url+id);
  }
  modificarEstatus(id:any):Observable<any>{
    return this.http.put(this.url+id, id);
  }
}
