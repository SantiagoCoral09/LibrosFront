import { Component, OnInit } from '@angular/core';
import { Prestamos } from 'src/app/interfaces/Prestamos';

@Component({
  selector: 'app-listar-prestamos',
  templateUrl: './listar-prestamos.component.html',
  styleUrls: ['./listar-prestamos.component.css']
})
export class ListarPrestamosComponent implements OnInit {
  listarPrestamos: Prestamos[]=[
    {
      id:1,
      isbnLibro:987979,
      idUsuario:102255,
      fechaPrestamo:'02 12 2021',
      fechaDevolucion:'02 03 2022'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
