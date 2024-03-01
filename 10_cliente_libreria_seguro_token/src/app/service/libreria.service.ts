import { HttpClient, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../model/Libro';
import { Observable } from 'rxjs';
import { PASSWORD, USUARIO } from '../custom_properties';

@Injectable({providedIn: 'root'})
export class LibreriaService {
  params:HttpParams;
  headers:HttpHeaders;

  url:string="http://localhost:9000/";

  constructor(private http:HttpClient) { }

  libros():Observable<Libro[]>{
    return this.http.get<Libro[]>(this.url + "libros");
  }

  libro(isbn:number):Observable<Libro>{
    this.params = this.params.set();
    this.headers = this.headers.set('Content-Type','application/x-www-form-urlencoded');

    this.headers = this.headers.set('Authorization', 'Basic ' + btoa(USUARIO + ":" + PASSWORD));
    return this.http.get<Libro>(this.url + "libros/" + isbn, {headers:this.headers});
  }

  alta(libro:Libro):Observable<void>{
    this.headers = this.headers.set('Authorization', 'Basic ' + btoa(USUARIO + ":" + PASSWORD));
    return this.http.post<void>(this.url + "alta", libro, {headers:this.headers});
  }

  tematicas():Observable<string[]>{
    return this.http.get<string[]>(this.url + "tematicas");
  }
}
