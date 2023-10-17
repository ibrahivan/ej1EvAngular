import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPreguntas } from 'src/app/modelos/i-preguntas';
import { LISTADOPREG } from 'src/app/modelos/mock-Preguntas';


@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {
  listadoPreg = LISTADOPREG;
  @Input() pregunta?: IPreguntas;


}

