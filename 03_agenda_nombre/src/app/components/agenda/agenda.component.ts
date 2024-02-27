import { Component } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  nombres:string[]=[]; // lista json de cadenas vacía
  nombre:string="";    // nombre introducido en campo de texto
  nombreSel:string=""  // nombre seleccionado de la lista
  guardar():void {
    this.nombres.push(this.nombre);
  }
  eliminar():void {
    /* Recorre el array y, si encuentra el nombre,
    elimina 1 elemento de la lista desde esa posición, i,
    o sea, la posición donde estamos. */
    for(let i=0; i<this.nombres.length; i++){
      if(this.nombres[i]==this.nombreSel){
        this.nombres.splice(i, 1);
      }
    }
  }
}
