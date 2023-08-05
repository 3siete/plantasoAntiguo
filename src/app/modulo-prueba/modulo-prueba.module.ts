import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';



@NgModule({
  declarations: [
    InicioComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModuloPruebaModule { }
