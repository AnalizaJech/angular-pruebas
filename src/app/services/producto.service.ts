import { Injectable } from '@angular/core';
import { Productos } from '../producto/producto.component';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos: Productos[] = [
    {
      id: 11,
      nombre: 'Asus Rog Zephyrus G16 Core I7 13620h 48gb 2tb Rtx4070 165hz',
      precio: 10532,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_686625-MPE80981898409_112024-F.webp',
      isOferta: true,
      porcentaje: 0.30,
      preciodescuento: 7.372
    },
  
    {
      id: 12,
      nombre: 'Mouse gamer de juego Logitech G Series Lightsync G203 lila',
      precio: 110,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_962838-MLU78245982107_082024-F.webp',
      isOferta: false,
      porcentaje: 0,
      preciodescuento: 7.372
    },
  
    {
      id: 23,
      nombre: 'Teclado Logitech Pebble Keys 2 K380s Inalambrico Bluetooth Color del teclado Grafito Idioma Español',
      precio: 137,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_771237-MLU75359061527_032024-F.webp',
      isOferta: true,
      porcentaje: 0.2,
      preciodescuento: 7.372
    },
  
    {
      id: 34,
      nombre: 'Audifono Accentum Plus Color Blanco',
      precio: 1099,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_602442-MLU76327083168_052024-F.webp',
      isOferta: true,
      porcentaje: 0.25,
      preciodescuento: 7.372
    }
];

  constructor(){
    this.precioDescuento();
  }

  precioDescuento(){
    this.productos=this.productos.map((p:Productos)=>{
      
      if(p.isOferta){
        const descuento = p.precio * p.porcentaje;
        p.preciodescuento = p.precio - descuento;
        return p;
      }
      p.preciodescuento = p.precio;
      return p;
    
  })
  }

  getProductos(){
    this.precioDescuento();
    return this.productos;
  }

  getProductoById(id:number){
    return this.productos.find((producto) => producto.id === id);
  }
}
