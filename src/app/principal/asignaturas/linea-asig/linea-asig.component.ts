import { Component, Input } from '@angular/core';
import { IAsignaturas } from 'src/app/modelos/i-asignaturas';
@Component({
  selector: 'app-linea-asig',
  templateUrl: './linea-asig.component.html',
  styleUrls: ['./linea-asig.component.css']
})
export class LineaAsigComponent {
  @Input ()asignatura?:IAsignaturas;
}
