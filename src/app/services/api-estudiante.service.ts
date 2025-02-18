import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export type Estudiante = {
  id: number;
  name: string;
  lastname: string;
  
};  

@Injectable({
  providedIn: 'root'
})
export class ApiEstudianteService {

  private apiUrl = 'https://run.mocky.io';
  
    constructor(private readonly http: HttpClient) {}
    getAllEstudiantes() {
      return firstValueFrom(
        this.http.get<Estudiante[]>(`${this.apiUrl}/v3/39cefe43-a94a-4e37-a5a4-3e4529d22e7f`)
      );
    }
}
