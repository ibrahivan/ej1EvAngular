import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';



const routes: Routes = [
  { path: 'preguntas', component: PreguntasComponent },
  { path: 'asignaturas', component: AsignaturasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
