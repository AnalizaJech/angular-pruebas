import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductoComponent } from './producto/producto.component';
import { ProdDetalleComponent } from './producto/prod-detalle/prod-detalle.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'producto', component: ProductoComponent},
    {path: 'producto/:id', component: ProdDetalleComponent},
];
