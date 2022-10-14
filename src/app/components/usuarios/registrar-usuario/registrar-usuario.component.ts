import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from 'src/app/interfaces/Usuarios';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  registro: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registro=this.fb.group({
      identificacion:['',Validators.required],
      nombres:['',Validators.required],
      apellidos:['',Validators.required],
      celular:['',Validators.required],
      correo:['',Validators.required],
      password:['',Validators.required],
    })
   }

  ngOnInit(): void {
  }

  registrar(){
    console.log(this.registro);

    const registroUser:Usuarios={
      identificacion: this.registro.get('identificacion')?.value,
      nombres: this.registro.get('nombres')?.value,
      apellidos: this.registro.get('apellidos')?.value,
      celular: this.registro.get('celular')?.value,
      correo: this.registro.get('correo')?.value,
      password: this.registro.get('password')?.value
    }
    console.log(registroUser);
  }

}
