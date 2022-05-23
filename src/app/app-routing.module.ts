import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { DriverComponent } from './driver/driver.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { ModuloComponent } from './modulo/modulo.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';



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
  path: 'modulo',
  component: ModuloComponent
},
{
  path: 'inicio-sesion',
  component: InicioSesionComponent
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'producto',
  component: ProductoComponent
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
