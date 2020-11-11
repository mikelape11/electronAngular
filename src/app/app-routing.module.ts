import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PortadaComponent } from './portada/portada.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilAdminComponent} from './perfil-admin/perfil-admin.component';
import { DatosUsuarioAdminComponent } from './datos-usuario-admin/datos-usuario-admin.component';

const routes: Routes = [
  { path: '', component: PortadaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'perfilAdmin', component: PerfilAdminComponent },
  { path: 'datosUsuarioAdmin/:usuario', component: DatosUsuarioAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
