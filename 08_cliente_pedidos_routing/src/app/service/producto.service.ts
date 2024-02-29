import { Injectable } from '@angular/core';
import { Producto } from '../model/Producto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) {}

  cargarProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>("http://localhost:9000/sproductos/productos");
  }
}
