import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PedidoComponent } from './components/pedido/pedido.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PedidoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [PedidoComponent]
})
export class AppModule { }
