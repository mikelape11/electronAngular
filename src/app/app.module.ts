import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './portada/portada.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ParticlesModule } from 'angular-particle';
import { HttpClientModule } from '@angular/common/http';
import { MapaComponent } from './mapa/mapa.component';
import { PerfilAdminComponent } from './perfil-admin/perfil-admin.component';
import { MenuComponent } from './menu/menu.component';
import { DatosUsuarioAdminComponent } from './datos-usuario-admin/datos-usuario-admin.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    PerfilComponent,
    LoginComponent,
    RegistroComponent,
    MapaComponent,
    PerfilAdminComponent,
    MenuComponent,
    DatosUsuarioAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
