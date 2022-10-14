import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Libros } from 'src/app/interfaces/Libros';
@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrls: ['./agregar-libro.component.css']
})
export class AgregarLibroComponent implements OnInit {
  registroLibro: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registroLibro=this.fb.group({
      isbn:['',Validators.required],
      titulo:['',Validators.required],
      autor:['',Validators.required],
      editorial:['',Validators.required],
      fechaPublicacion:['',Validators.required],
    })
   }

  ngOnInit(): void {
  }
  registrarLibro(){
    console.log(this.registroLibro);

    const registroLibro:Libros={
      isbn: this.registroLibro.get('isbn')?.value,
      titulo: this.registroLibro.get('titulo')?.value,
      autor: this.registroLibro.get('autor')?.value,
      editorial: this.registroLibro.get('editorial')?.value,
      fechaPublicacion: this.registroLibro.get('fechaPublicacion')?.value
    }
    console.log(registroLibro);
  }

}
