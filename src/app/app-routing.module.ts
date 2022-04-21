import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { DriverComponent } from './driver/driver.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [{
  path: 'inicio',
  component: PaginaPrincipalComponent
},
{
  path: 'registrar',
  component: UsuarioComponent
},
{
  path: 'registro-clientes',
  component: ClienteComponent
},
{
  path: 'driver',
  component: DriverComponent
},
{
  path: '**',
  redirectTo:  'inicio'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
