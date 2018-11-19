import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './modules/home/home.component';
import { ServiciosComponent } from './modules/servicios/servicios.component';
import { InstalacionesComponent } from './modules/instalaciones/instalaciones.component';
import { RegistroComponent } from './modules/registro/registro.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'servicios', component: ServiciosComponent, pathMatch: 'full'},
  {path: 'instalaciones', component: InstalacionesComponent, pathMatch: 'full'},
  {path: 'registros', component: RegistroComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
