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
      descripcion: `Procesador: Intel Core de 13ª generación, 
Tarjeta Gráfica: NVIDIA GeForce RTX 4070 (321 AI TOPs),
Pantalla: 16” QHD+ 165Hz con tecnología IPS,
Almacenamiento: SSD NVMe de alta velocidad,
Memoria RAM: Hasta 32GB DDR5,
Refrigeración: Sistema avanzado con tecnología ROG Intelligent Cooling,
Conectividad: Wi-Fi 6E, USB-C, HDMI 2.1, Thunderbolt 4,
Peso: Ligero y portátil, ideal para gamers y creadores de contenido`,
      precio: 10532,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_686625-MPE80981898409_112024-F.webp',
      isOferta: true,
      porcentaje: 0.30,
      preciodescuento: 7.372
    },
  
    {
      id: 12,
      nombre: 'Mouse gamer de juego Logitech G Series Lightsync G203 lila',
      descripcion: `Sensor: Óptico de alta precisión con 8000 DPI ajustables, 
      Iluminación: Tecnología LIGHTSYNC RGB personalizable, 
      Botones: 6 botones programables con respuesta rápida, 
      Conectividad: Cable USB para conexión estable y sin latencia, 
      Compatibilidad: Windows, macOS y sistemas con soporte USB, 
      Ergonomía: Diseño ligero y cómodo para largas sesiones de juego`,
      precio: 110,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_962838-MLU78245982107_082024-F.webp',
      isOferta: false,
      porcentaje: 0,
      preciodescuento: 7.372
    },
  
    {
      id: 23,
      nombre: 'Teclado Logitech Pebble Keys 2 K380s Inalambrico Bluetooth Color del teclado Grafito Idioma Español',
      descripcion: `Conectividad: Bluetooth 5.1 con compatibilidad multidispositivo, 
      Diseño: Ultraportátil, compacto y ligero, 
      Distribución: Idioma español con teclas redondeadas para mayor confort, 
      Autonomía: Hasta 2 años de duración de batería con pilas AAA, 
      Compatibilidad: Windows, macOS, iOS, Android y Chromebook, 
      Modo silencioso: Teclas de bajo ruido para una experiencia más cómoda`,
      precio: 137,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_771237-MLU75359061527_032024-F.webp',
      isOferta: true,
      porcentaje: 0.2,
      preciodescuento: 7.372
    },
  
    {
      id: 34,
      nombre: 'Audifono Accentum Plus Color Blanco',
      descripcion: `Calidad de Sonido: Audio premium con graves profundos y agudos nítidos, 
      Cancelación de Ruido: Tecnología activa (ANC) para una experiencia inmersiva, 
      Autonomía: Hasta 40 horas de reproducción continua, 
      Carga rápida: 10 minutos de carga = 5 horas de uso, 
      Conectividad: Bluetooth 5.2 con baja latencia, 
      Diseño: Almohadillas ergonómicas y ajuste ajustable para mayor comodidad`,
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
  addProduct(product: Productos) {
    this.productos.push(product);
    console.log('Products in service:', this.productos);
  }
}
