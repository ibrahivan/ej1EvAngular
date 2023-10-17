import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './principal/header/header.component';
import { AsignaturasComponent } from './principal/asignaturas/asignaturas.component';
import { PreguntasComponent } from './principal/preguntas/preguntas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LineaPregComponent } from './principal/preguntas/linea-preg/linea-preg.component';
import { PrincipalComponent } from './principal/principal.component';
import { LineaAsigComponent } from './principal/asignaturas/linea-asig/linea-asig.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsignaturasComponent,
    PreguntasComponent,
    LineaPregComponent,
    PrincipalComponent,
    LineaAsigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
