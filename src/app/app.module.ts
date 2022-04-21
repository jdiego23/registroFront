import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MaterialExampleModule} from './material.module';
import { GlobalErrorHandler } from './global-error-handler';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ClienteComponent } from './cliente/cliente.component';
import { DriverComponent } from './driver/driver.component';
import { ModuloComponent } from './modulo/modulo.component';




@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    PaginaPrincipalComponent,
    ClienteComponent,
    DriverComponent,
    ModuloComponent,

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
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
