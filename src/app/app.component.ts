import { CurrencyPipe, DatePipe, LowerCasePipe, NgClass, NgFor, NgIf, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component, Pipe, PipeTransform } from '@angular/core';

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

@Pipe({
  name: 'alrevesPipe',
  standalone: true,  
})

export class MiPipe implements PipeTransform {
  transform(value: string) {
    return value.split('').reverse().join('');
  }
}

@Pipe({
  name: 'ofuscacion',
  standalone: true,  
})

export class OfuscarPipe implements PipeTransform {
  transform(value: string) {
    return `${value.substring(0,3)}***`;
  }
}


type Productos = {
  nombre: string;
  precio: number;
  imagenUrl: string;
  isOferta: boolean;
  porcentaje: number;
  preciodescuento: number;
}

@Component({
  selector: 'app-root',
  imports: [NgFor,NgIf, NgClass, UpperCasePipe,CurrencyPipe, DatePipe, PercentPipe, 
    MiPipe, OfuscarPipe, AcortarTextoPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jech App';
  creador: string = 'Jech';
  fecha: Date = new Date();
  presupuesto: number = 30232324.500;
  descripcion: string = 'Aplicación de prueba';
  colores: string[] = ['Rojo', 'Verde', 'Azul', 'Amarillo', 'Blanco'];
  Notificacion:boolean = true;
  productos: Productos[] = [
    {
      nombre: 'Asus Rog Zephyrus G16 Core I7 13620h 48gb 2tb Rtx4070 165hz',
      precio: 10532,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_686625-MPE80981898409_112024-F.webp',
      isOferta: true,
      porcentaje: 0.30,
      preciodescuento: 7.372
    },

    {
      nombre: 'Mouse gamer de juego Logitech G Series Lightsync G203 lila',
      precio: 110,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_962838-MLU78245982107_082024-F.webp',
      isOferta: false,
      porcentaje: 0,
      preciodescuento: 7.372
    },

    {
      nombre: 'Teclado Logitech Pebble Keys 2 K380s Inalambrico Bluetooth Color del teclado Grafito Idioma Español',
      precio: 137,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_771237-MLU75359061527_032024-F.webp',
      isOferta: true,
      porcentaje: 0.2,
      preciodescuento: 7.372
    },

    {
      nombre: 'Audifono Accentum Plus Color Blanco',
      precio: 1099,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_602442-MLU76327083168_052024-F.webp',
      isOferta: true,
      porcentaje: 0.25,
      preciodescuento: 7.372
    }
  ];

  constructor(){
    this.productos=this.productos.map((p:Productos)=>{
      
        if(p.isOferta){
          const descuento = p.precio * p.porcentaje;
          p.preciodescuento = p.precio - descuento;
          return p;
        }
        return p;
      
    })
  }
  

}

