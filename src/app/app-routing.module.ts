import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarLibroComponent } from './components/libros/agregar-libro/agregar-libro.component';
import { ListarLibrosComponent } from './components/libros/listar-libros/listar-libros.component';
import { LoginComponent } from './components/login/login.component';
import { MostrarLibrosComponent } from './components/usuarios/mostrar-libros/mostrar-libros.component';
import { RegistrarUsuarioComponent } from './components/usuarios/registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'registrarUsuario', component: RegistrarUsuarioComponent},
  {path:'mostrarLibros', component: MostrarLibrosComponent},

  // {path:'editarUsuario', component: LoginComponent},
  {path:'agregarLibro', component: AgregarLibroComponent},
  {path:'listarLibros', component: ListarLibrosComponent},
  {path:'agregarLibro', component: AgregarLibroComponent},

  {path:'**',redirectTo:'',pathMatch:'full'}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
