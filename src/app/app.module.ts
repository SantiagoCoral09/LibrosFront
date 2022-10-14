import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarLibroComponent } from './components/libros/agregar-libro/agregar-libro.component';
import { ListarLibrosComponent } from './components/libros/listar-libros/listar-libros.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MostrarLibrosComponent } from './components/usuarios/mostrar-libros/mostrar-libros.component';
import { RegistrarUsuarioComponent } from './components/usuarios/registrar-usuario/registrar-usuario.component';
import { ListarUsuariosComponent } from './components/usuarios/listar-usuarios/listar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarLibroComponent,
    ListarLibrosComponent,
    LoginComponent,
    NavbarComponent,
    MostrarLibrosComponent,
    RegistrarUsuarioComponent,
    ListarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
