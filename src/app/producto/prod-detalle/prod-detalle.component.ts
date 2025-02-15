import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Productos } from '../producto.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'prod-detalle',
  providers: [ProductoService],
  imports: [CurrencyPipe],
  templateUrl: './prod-detalle.component.html',
})
export class ProdDetalleComponent implements OnInit {
  
  productoId: number = 0;

  producto: Productos | undefined;

  constructor(
    private route: ActivatedRoute, 
    private readonly productoService: ProductoService
  ) { 
  }

  ngOnInit(): void {

    this.route.params.subscribe((params)=>{
      
      this.productoId = +params['id'];
      this.producto = this.productoService.getProductoById(this.productoId);
      console.log(this.producto);
    });
  }
}
