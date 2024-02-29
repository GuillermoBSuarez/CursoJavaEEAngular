import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../model/Pedido';
import { PedidosService } from '../../service/pedidos.service';
import { ProductoService } from '../../service/producto.service';
import { Producto } from '../../model/Producto';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent implements OnInit{
  pedidos:Pedido[];

  constructor(private servicePedidos:PedidosService){}

  ngOnInit(): void {
    this.cargarPedidos();
  }
  
  cargarPedidos():void{
    this.servicePedidos
        .cargarPedidos()
        .subscribe( data => this.pedidos=data );
  }
}
