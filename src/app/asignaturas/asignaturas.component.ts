import { Component } from '@angular/core';
import { IAsignaturas } from 'src/app/modelos/i-asignaturas';
import { SAsignaturasService } from '../servicios/s-asignaturas.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent {
  listadoAsig: IAsignaturas[] = [];

  constructor(private sAsignaturasService: SAsignaturasService) {}

  ngOnInit(): void{
    this.getAsignaturas();
  }

  getAsignaturas(): void {
    this.sAsignaturasService.getAsignaturas()
      .subscribe(asignatura => this.listadoAsig = asignatura);
  }
}
