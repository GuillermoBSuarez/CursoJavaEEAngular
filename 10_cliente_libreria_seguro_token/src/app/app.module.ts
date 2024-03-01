import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClient, HttpClientModule, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { LibroComponent } from './components/libro/libro.component';
import { AltaComponent } from './components/alta/alta.component';

@NgModule({
  declarations: [
    MenuComponent,
    CatalogoComponent,
    LibroComponent,
    AltaComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class AppModule { }
