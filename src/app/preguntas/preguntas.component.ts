import { Component } from '@angular/core';
import { IPreguntas } from 'src/app/modelos/i-preguntas';
import { SPreguntasService } from '../servicios/s-preguntas.service';


@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {
  listadoPreg: IPreguntas[] = [];

  constructor(private sPreguntasService: SPreguntasService) {}

  ngOnInit(): void{
    this.getAsignaturas();
  }

  getAsignaturas(): void {
    this.sPreguntasService.getAsignaturas()
      .subscribe(pregunta => this.listadoPreg = pregunta);
  }
}

