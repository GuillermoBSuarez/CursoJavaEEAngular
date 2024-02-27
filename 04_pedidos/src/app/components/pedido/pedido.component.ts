import { Pedido } from './../../model/Pedido';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent {
  pedido:Pedido;
  pedidos:Pedido[]=[];
  tablaVisible:boolean = false;

  constructor() {
    this.pedido = new Pedido;
  }

  grabar():void {
    this.pedidos.push(this.pedido);
    this.pedido = new Pedido;
  }

  ver():void {
    this.tablaVisible = !this.tablaVisible;
  }
}
