import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Productos } from '../producto.component';
import { CurrencyPipe, NgIf } from '@angular/common';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'prod-detalle',
  //providers: [ProductoService],
  imports: [CurrencyPipe, NgIf],
  templateUrl: './prod-detalle.component.html',
})
export class ProdDetalleComponent implements OnInit {
  
  productoId: number = 0;

  producto: Productos | undefined;

  constructor(
    private readonly route: ActivatedRoute, 
    private readonly Router: Router, 
    private readonly productoService: ProductoService
  ) { 
  }

  goBack(): void {
    this.Router.navigate(['/producto']);
  }

  async ngOnInit(): Promise<void> {
    const params = await firstValueFrom(this.route.params); // Espera los parámetros de la URL
    this.productoId = +params['id']; // Convierte el ID a número
    this.producto = await this.productoService.getProductoById(this.productoId); // Busca el producto en la API
    console.log(this.producto);
  }
  
}
