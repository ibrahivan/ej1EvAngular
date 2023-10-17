import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAsignaturas } from 'src/app/modelos/i-asignaturas';
import { LISTADOASIG } from 'src/app/modelos/mock-Asignaturas';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent {
  @Input ()asignatura?:IAsignaturas;
  listadoAsig = LISTADOASIG;

 
}
