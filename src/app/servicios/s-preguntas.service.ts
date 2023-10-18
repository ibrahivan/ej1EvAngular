import { Injectable } from '@angular/core';
import { IPreguntas } from '../modelos/i-preguntas';
import { LISTADOPREG } from '../modelos/mock-Preguntas';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SPreguntasService {

  constructor() { }

  getAsignaturas(): Observable<IPreguntas[]> {
    const preguntas = of(LISTADOPREG);
    return preguntas;
  }
}
