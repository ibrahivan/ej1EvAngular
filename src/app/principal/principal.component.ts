import { Component } from '@angular/core';
import { IPreguntas } from '../modelos/i-preguntas';
import { IAsignaturas } from '../modelos/i-asignaturas';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  pregunta?:IPreguntas;
  asignatura?:IAsignaturas;

}
