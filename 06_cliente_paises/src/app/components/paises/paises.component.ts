import { Component } from '@angular/core';
import { Pais } from '../../model/Pais';
import { PaisesService } from '../../service/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {
  continente:string;
  continentes:string[];
  paises:Pais[];

  constructor(private service:PaisesService){
    this.cargarContinentes();
  }

  cargarContinentes():void{
    this.service
        .continentes()
        .subscribe( d => this.continentes=d );
  }

  cargarPaisesContinente():void{
    this.service
        .paisesContinente(this.continente)
        .subscribe( d => this.paises=d );
  }
}
