import { CurrencyPipe, DatePipe, NgClass, NgFor, NgIf, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../services/producto.service';

@Pipe({
  name: 'acortarTexto',
  standalone: true,  
})
export class AcortarTextoPipe implements PipeTransform {
  transform(originalText: string, longitud: number) {
    const transformacion = originalText.length > longitud ? `${originalText.slice(0, longitud)}...` : originalText;
    return transformacion;
  }
}


export type Productos = {
  id: number;
  nombre: string;
  precio: number;
  imagenUrl: string;
  isOferta: boolean;
  porcentaje: number;
  preciodescuento: number;
}


@Component({
  selector: 'card-producto',
  imports: [NgFor,NgIf, NgClass,CurrencyPipe, PercentPipe, RouterLink,
    AcortarTextoPipe],
  templateUrl: './producto.component.html',
  providers: [ProductoService],
})
export class ProductoComponent implements OnInit{
  productos?: Productos[];
  constructor(private readonly productoService: ProductoService) {
  }
  ngOnInit() {
    this.productos = this.productoService.getProductos();   
  }

}

 



