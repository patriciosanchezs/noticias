import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticia(parametros: any): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country='
     + parametros.pais + '&category=' + parametros.categoria + '&apiKey=e57411e1d01241fca95ab75417819065';

    return this.http.get(URL);
  }
}
