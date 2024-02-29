import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../service/pedidos.service';
import { ProductoService } from '../../service/producto.service';
import { Pedido } from '../../model/Pedido';
import { Producto } from '../../model/Producto';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent implements OnInit{
  pedido:Pedido;
  productos:Producto[];

  constructor(private servicePedidos:PedidosService,
    private serviceProductos:ProductoService){}

  ngOnInit(): void {
      this.pedido=new Pedido();
      this.cargarProductos();
    }

  cargarProductos():void{
    this.serviceProductos
        .cargarProductos()
        .subscribe( data => this.productos=data );
  }

  grabarPedido():void{
    this.servicePedidos
        .grabarPedido(this.pedido)
        .subscribe( data => this.cargarProductos() );
        /* Aunque el método es void, ponemos este data en el subscribe porque la llamada a servicePedidos ES ASÍNCRONA.
        Si llamamos a cargarProductos FUERA de esta orden, ejecuta cargarProductos cuando aún NO HA EJECUTADO la grabación
        Y ACTUALIZACIÓN DE STOCK en el servicio, con lo que no lo actualiza. */
  }



}
