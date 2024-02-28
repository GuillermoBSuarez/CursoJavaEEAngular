import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../model/Pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  urlBase:string = "http://localhost:8000/"; // dirección del servicio del 89_servicio_paises_eureka_gateway

  constructor(private http:HttpClient) { }

  continentes():Observable<string[]>{
    return this.http.get<string[]>(this.urlBase + "continentes");
  }

  paisesContinente(continente:string):Observable<Pais[]>{
    return this.http.get<Pais[]>(this.urlBase + "paises/" + continente);
  }
}
