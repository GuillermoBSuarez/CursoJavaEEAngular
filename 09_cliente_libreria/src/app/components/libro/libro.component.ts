import { Component, OnInit } from '@angular/core';
import { Libro } from '../../model/Libro';
import { LibreriaService } from '../../service/libreria.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})
export class LibroComponent{

  isbn:number;
  libro:Libro;

  constructor(private service:LibreriaService){}

  buscarLibro():void{
    this.service
        .libro(this.isbn)
        .subscribe(data => this.libro=data)
  }
}
