import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/interfaces/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;

  constructor(private fb: FormBuilder) {
    this.login = this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required],
    })
   }

  ngOnInit(): void {
  }

  iniciar(){
    console.log(this.login);

    const loginUser:Login={
      usuario: this.login.get('usuario')?.value,
      password: this.login.get('password')?.value
    }
    console.log(loginUser);
  }
}
