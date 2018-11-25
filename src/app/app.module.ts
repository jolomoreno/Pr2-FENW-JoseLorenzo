import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Components
import { FooterComponent } from './root/components/footer/footer.component';
import { HeaderComponent } from './root/components/header/header.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { HomeComponent } from './components/home/home.component';
import { InstalacionesComponent } from './components/instalaciones/instalaciones.component';
import { RootComponent } from './root/root.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';

// Services
import { LoginService } from './shared/services/login.service';
import { RegistroService } from './shared/services/registro.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServiciosComponent,
    InstalacionesComponent,
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, RegistroService],
  bootstrap: [RootComponent]
})
export class AppModule { }
