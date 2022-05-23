import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MaterialExampleModule} from './material.module';
import { GlobalErrorHandler } from './global-error-handler';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ClienteComponent } from './cliente/cliente.component';
import { DriverComponent } from './driver/driver.component';
import { ModuloComponent } from './modulo/modulo.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { JwtInterceptor } from './jwt.interceptor';
import { AutorizacionGuard } from './autorizacion.guard';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    PaginaPrincipalComponent,
    ClienteComponent,
    DriverComponent,
    ModuloComponent,
    InicioSesionComponent,
    HomeComponent,
    ProductoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialExampleModule
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: GlobalErrorHandler,
  },
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    AutorizacionGuard,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
