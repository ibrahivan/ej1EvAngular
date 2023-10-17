import { Component,Input } from '@angular/core';
import { IPreguntas } from 'src/app/modelos/i-preguntas';

@Component({
  selector: 'app-linea-preg',
  templateUrl: './linea-preg.component.html',
  styleUrls: ['./linea-preg.component.css']
})
export class LineaPregComponent {
@Input ()pregunta?:IPreguntas;
}
