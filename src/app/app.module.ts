import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { ServiciosComponent } from './layouts/servicios/servicios.component';
import { HomeComponent } from './layouts/home/home.component';
import { InstalacionesComponent } from './layouts/instalaciones/instalaciones.component';
import { RootComponent } from './layouts/root/root.component';
import { RegistroComponent } from './layouts/registro/registro.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServiciosComponent,
    InstalacionesComponent,
    RootComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
