import { Token } from './../model/Token';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../model/Libro';
import { Observable } from 'rxjs';
import { CLIENT_ID, GRANT_TYPE, PASSWORD, USERNAME, ULR_AUTH } from '../custom_properties';

@Injectable({providedIn: 'root'})
export class LibreriaService {
  params:HttpParams = new HttpParams;
  headers:HttpHeaders = new HttpHeaders;
  token:string;

  url:string="http://localhost:9000/";

  constructor(private http:HttpClient) {
    this.params = this.params.append("username",USERNAME)
                             .append("password",PASSWORD)
                             .append("client_id",CLIENT_ID)
                             .append("grant_type",GRANT_TYPE);
    this.headers = this.headers.set('Content-Type','application/x-www-form-urlencoded');
    this.http.post<Token>(ULR_AUTH, this.params, {"headers":this.headers})
                          .subscribe( data => this.token = data.access_token);
  }

  libros():Observable<Libro[]>{
    this.headers = this.headers.set("Authorization", "Bearer " + this.token);
    return this.http.get<Libro[]>(this.url + "libros", {headers:this.headers});
  }

  libro(isbn:number):Observable<Libro>{
    this.headers = this.headers.set("Authorization", "Bearer " + this.token);
    return this.http.get<Libro>(this.url + "libros/" + isbn);
  }

  alta(libro:Libro):Observable<void>{
    this.headers = this.headers.set("Authorization", "Bearer " + this.token);
    this.headers = this.headers.set('Content-Type','application/json');
    return this.http.post<void>(this.url + "alta", libro, {headers:this.headers});
  }

  tematicas():Observable<string[]>{
    return this.http.get<string[]>(this.url + "tematicas");
  }
}
