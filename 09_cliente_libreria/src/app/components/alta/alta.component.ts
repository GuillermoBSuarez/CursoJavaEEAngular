import { Component, OnInit } from '@angular/core';
import { Libro } from '../../model/Libro';
import { LibreriaService } from '../../service/libreria.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent implements OnInit{
  tematicas:string[];
  libro:Libro;

  constructor(private service:LibreriaService){}

  ngOnInit(): void {
    this.cargarTematicas();
  }

  cargarTematicas(): void {
    this.service
        .tematicas()
        .subscribe(data => this.tematicas=data);
  }

  alta():void{
    this.service
        .alta(this.libro)
        .subscribe(data => this.alta);
  }
}
