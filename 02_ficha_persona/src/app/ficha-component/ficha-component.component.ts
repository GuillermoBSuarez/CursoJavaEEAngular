import { Component } from '@angular/core';
import { Persona } from '../model/Persona';

@Component({
  selector: 'app-ficha-component',
  templateUrl: './ficha-component.component.html',
  styleUrl: './ficha-component.component.css'
})
export class FichaComponentComponent {
  /*
  PRIMERA VERSIÓN:
  nombre:string = "";
  edad:number = 0;
  departamento:string = "";
  */
  persona:Persona;
  resultado:string = "";

  /* CONSTRUCTOR DE LA CLASE PERSONA */
  constructor(){
    this.persona = new Persona();
  }

  grabar():void {
  /*
  PRIMERA VERSIÓN:
    this.resultado = "Te llamas " + this.nombre +
                     ", tienes " + this.edad + " años " +
                     "y eres del departamento " + this.departamento;
  */
  this.resultado = "Te llamas " + this.persona.nombre +
      ", tienes " + this.persona.edad + " años " +
      "y eres del departamento " + this.persona.departamento;
  }
}
