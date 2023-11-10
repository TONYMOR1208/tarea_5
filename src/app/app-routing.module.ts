import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RecuContraComponent } from './componentes/recu-contra/recu-contra.component';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'recu_contra', component: RecuContraComponent },
  { path: '', redirectTo: 'principal', pathMatch: 'full' }, // Redirección a inicio-sesion
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
