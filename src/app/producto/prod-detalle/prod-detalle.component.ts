import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Productos } from '../producto.component';
import { CurrencyPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'prod-detalle',
  //providers: [ProductoService],
  imports: [CurrencyPipe, MatButton],
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

  ngOnInit(): void {

    this.route.params.subscribe((params)=>{
      
      this.productoId = +params['id'];
      this.producto = this.productoService.getProductoById(this.productoId);
      console.log(this.producto);
    });
  }
}
