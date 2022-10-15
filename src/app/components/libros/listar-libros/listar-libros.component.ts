import { Component, OnInit } from '@angular/core';
import { Libros } from 'src/app/interfaces/Libros';

@Component({
  selector: 'app-listar-libros',
  templateUrl: './listar-libros.component.html',
  styleUrls: ['./listar-libros.component.css']
})
export class ListarLibrosComponent implements OnInit {

  listarLibros: Libros[]=[
    {
      id:1,
      isbn:12457898,
      titulo:'El rey Lear',
      autor:'William Shakespeare',
      editorial:'Espasa Libros',
      fechaPublicacion:'09 12 1986'
    },
    {
      id:1,
      isbn:12457898,
      titulo:'El rey Lear',
      autor:'William Shakespeare',
      editorial:'Espasa Libros',
      fechaPublicacion:'09 12 1986'
    },{
      id:1,
      isbn:12457898,
      titulo:'El rey Lear',
      autor:'William Shakespeare',
      editorial:'Espasa Libros',
      fechaPublicacion:'09 12 1986'
    },{
      id:1,
      isbn:12457898,
      titulo:'El rey Lear',
      autor:'William Shakespeare',
      editorial:'Espasa Libros',
      fechaPublicacion:'09 12 1986'
    },{
      id:1,
      isbn:12457898,
      titulo:'El rey Lear',
      autor:'William Shakespeare',
      editorial:'Espasa Libros',
      fechaPublicacion:'09 12 1986'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
