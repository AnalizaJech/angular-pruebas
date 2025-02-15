import { CurrencyPipe, DatePipe, LowerCasePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, Pipe, PipeTransform } from '@angular/core';

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
  isOferta: string;

}

@Component({
  selector: 'app-root',
  imports: [NgFor,NgIf, UpperCasePipe,CurrencyPipe, DatePipe, 
    MiPipe, OfuscarPipe],
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
      precio: 10.532,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_686625-MPE80981898409_112024-F.webp',
      isOferta: 'si'
    },

    {
      nombre: 'Mouse gamer de juego Logitech G Series Lightsync G203 lila',
      precio: 110,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_962838-MLU78245982107_082024-F.webp',
      isOferta: 'No'
    },

    {
      nombre: 'Teclado Logitech Pebble Keys 2 K380s Inalambrico Bluetooth Color del teclado Grafito Idioma Español',
      precio: 137,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_771237-MLU75359061527_032024-F.webp',
      isOferta: 'si'
    },

    {
      nombre: 'Audifono Accentum Plus Color Blanco',
      precio: 1.099,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_602442-MLU76327083168_052024-F.webp',
      isOferta: 'si'
    }
  ];
}
