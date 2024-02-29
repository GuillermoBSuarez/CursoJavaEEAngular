import { Component, OnInit } from '@angular/core';
import { Libro } from '../../model/Libro';
import { LibreriaService } from '../../service/libreria.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit {

  libros:Libro[];

  constructor(private service:LibreriaService){}

  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros():void {
    this.service
        .libros()
        .subscribe(data => this.libros=data);
  }
}
