import { CurrencyPipe, DatePipe, NgClass, NgFor, NgIf, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component, inject, OnInit, Pipe, PipeTransform } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { ProdDialogoComponent } from './prod-dialogo/prod-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ApiProductoService, ProductApi } from '../services/api-producto.service';


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
  descripcion: string;
  precio: number;
  imagenUrl: string;
  isOferta: boolean;
  porcentaje: number;
  preciodescuento: number;
}


@Component({
  selector: 'card-producto',
  imports: [NgFor,NgIf, NgClass,CurrencyPipe, PercentPipe, RouterLink,
    AcortarTextoPipe, MatButtonModule],
  templateUrl: './producto.component.html',
  //providers: [ProductoService],
})
export class ProductoComponent implements OnInit{
  productos?: Productos[];
  dialog = inject(MatDialog);
  productosApi: ProductApi[] = [];

  constructor(
    private readonly productoService: ProductoService,
    private readonly apiProductoService: ApiProductoService
  ) {
    
  }
  
  async ngOnInit() {
    this.productos = this.productoService.getProductos();
    this.productosApi = await this.apiProductoService.getAllProducts();   
  }

  openDialog() {
    const dialogRef = this.dialog.open(ProdDialogoComponent, {
      data: {
        animal: 'unicorn',
      },
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.productos = this.productoService.getProductos();
        console.log('Products after dialog:', this.productos);
      }
    });
  }

}

 



