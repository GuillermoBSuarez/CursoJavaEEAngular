import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../model/Libro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibreriaService {

  url:string="http://localhost:9000/";

  constructor(private http:HttpClient) { }

  libros():Observable<Libro[]>{
    return this.http.get<Libro[]>(this.url + "libros");
  }

  libro(isbn:number):Observable<Libro>{
    return this.http.get<Libro>(this.url + "libros/" + isbn);
  }

  alta(libro:Libro):Observable<void>{
    return this.http.post<void>(this.url + "alta", libro);
  }

  tematicas():Observable<string[]>{
    return this.http.get<string[]>(this.url + "tematicas");
  }
}
