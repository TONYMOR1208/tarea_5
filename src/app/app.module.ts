import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RecuContraComponent } from './componentes/recu-contra/recu-contra.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    InicioSesionComponent,
    RegistroComponent,
    RecuContraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
