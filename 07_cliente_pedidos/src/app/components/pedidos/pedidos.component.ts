import { Component } from '@angular/core';
import { Pedido } from '../../model/Pedido';
import { PedidosService } from '../../service/pedidos.service';
import { ProductoService } from '../../service/producto.service';
import { Producto } from '../../model/Producto';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
  productos:Producto[];
  pedido:Pedido;
  pedidos:Pedido[];

  constructor(private servicePedidos:PedidosService,
              private serviceProductos:ProductoService){
    this.pedido=new Pedido();
    this.cargarProductos();
  }

  cargarProductos():void{
    this.serviceProductos
        .cargarProductos()
        .subscribe( data => this.productos );
  }

  grabarPedido(pedido:Pedido):void{
    this.servicePedidos
        .grabarPedido(this.pedido)
        .subscribe();
  }

  cargarPedidos():void{
    this.servicePedidos
        .cargarPedidos()
        .subscribe( data => this.pedidos=data );
  }
}
