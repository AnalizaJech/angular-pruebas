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
        this.http.get<Estudiante[]>(`${this.apiUrl}/v3/0ffa9b32-13f2-4fb9-81d6-b090fe278374`)
      );
    }
}
