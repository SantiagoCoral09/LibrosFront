import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/interfaces/Usuarios';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
listarUsuarios: Usuarios[]=[
  {
    id:1,
    identificacion:102255,
    nombres:'Juliana',
    apellidos:'Santander',
    celular:3021232121,
    correo:'juliana@udenar.edu.co',
    password:'12345'
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
