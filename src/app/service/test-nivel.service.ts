import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { TESTROL } from '../models/testRol';

@Injectable({
  providedIn: 'root'
})
export class TestNivelService {
  url = 'http://localhost:3000/api/test/';

  constructor(private http: HttpClient) { }

  guardarTest(TESTROL:TESTROL):Observable<any>{
    return this.http.post(this.url, TESTROL);
  }
  getTest():Observable<any>{
    return this.http.get(this.url);
  }

  deleteTest(id:any):Observable<any>{
    return this.http.delete(this.url+id);
  }
}
