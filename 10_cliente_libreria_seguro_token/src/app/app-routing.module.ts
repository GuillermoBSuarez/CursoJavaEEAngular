import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { LibroComponent } from './components/libro/libro.component';
import { AltaComponent } from './components/alta/alta.component';

const routes: Routes = [
  {
    path:"catalogo",
    component:CatalogoComponent
  },
  {
    path:"libro",
    component:LibroComponent
  },
  {
    path:"alta",
    component:AltaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
