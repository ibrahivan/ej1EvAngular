import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAsignaturas } from '../modelos/i-asignaturas';
import { LISTADOASIG } from '../modelos/mock-Asignaturas';

@Injectable({
  providedIn: 'root'
})
export class SAsignaturasService {

  constructor() {}

    getAsignaturas(): Observable<IAsignaturas[]> {
      const asignaturas = of(LISTADOASIG);
      return asignaturas;
    }
   }
