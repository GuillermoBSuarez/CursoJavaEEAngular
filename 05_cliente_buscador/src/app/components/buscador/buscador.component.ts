import { Component } from '@angular/core';
import { Resultado } from '../../model/Resultado';
import { BuscadorService } from '../../service/buscador.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  tematica:string;
  resultados:Resultado[];

  constructor(private buscadorService:BuscadorService){}
  /* Forma de inyectar cosas en Angular: crear parámetro en el constructor
  de las "cosas" donde se inyectarán otras "cosas".

  Las cosas. */

  buscar():void{
    this.buscadorService
        .buscarResultados(this.tematica)    // Observable<Resultado[]>
        .subscribe( d => this.resultados=d ); // Llamada asíncrona, esto se ejecuta cuando el resultado esté disponible
  }
}
