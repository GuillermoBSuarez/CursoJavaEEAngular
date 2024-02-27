import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resultado } from '../model/Resultado';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  constructor(private http:HttpClient) { }

  buscarResultados(tematica:string):Observable<Resultado[]> {
    let url:string = "http://localhost:7000/buscador";
    return this.http.get<Resultado[]>(url + "?tematica=" + tematica); // llamada asíncrona
  }
}
