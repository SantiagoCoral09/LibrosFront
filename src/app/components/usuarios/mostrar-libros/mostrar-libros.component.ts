import { Component, OnInit } from '@angular/core';
import { Libros } from 'src/app/interfaces/Libros';

@Component({
  selector: 'app-mostrar-libros',
  templateUrl: './mostrar-libros.component.html',
  styleUrls: ['./mostrar-libros.component.css']
})
export class MostrarLibrosComponent implements OnInit {
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
      id:2,
      isbn:987979,
      titulo:'Cien Años de soledad',
      autor:'Gabriel Garcia Marquez',
      editorial:'Libroteca',
      fechaPublicacion:'23 05 1999'
    },{
      id:3,
      isbn:5689784,
      titulo:'Pestilencia',
      autor:'Robert Faraday',
      editorial:'Reb',
      fechaPublicacion:'23 03 2011'
    },{
      id:4,
      isbn:5687456,
      titulo:'Paradise',
      autor:'Fernanda Jacobo',
      editorial:'MexiLibros',
      fechaPublicacion:'09 04 2013'
    },{
      id:5,
      isbn:6598787,
      titulo:'Noches Blancas',
      autor:'Fiodor Dostoievsky',
      editorial:'Campaña',
      fechaPublicacion:'19 05 1995'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
