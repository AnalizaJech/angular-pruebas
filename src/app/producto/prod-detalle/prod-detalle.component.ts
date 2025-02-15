import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'prod-detalle',
  imports: [],
  templateUrl: './prod-detalle.component.html',
})
export class ProdDetalleComponent {
  productoId: number = 0;
  constructor(private route:ActivatedRoute){
    this.route.params.subscribe((params)=>{
      this.productoId = params['id'];
    });
  }
}
