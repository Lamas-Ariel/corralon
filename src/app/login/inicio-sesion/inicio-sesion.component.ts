import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit{

  loginForm = this.formBuilder.group({
    email:['corralon@gmail.com',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
  })

  constructor(private formBuilder: FormBuilder, private router:Router){}

  ngOnInit(): void {
    
  }

  get email(){
    return this.loginForm.controls.email;
  }

  get password(){
    return this.loginForm.controls.password;
  }

  login(){
    if (this.loginForm.valid) {
      console.log('llamar al sevicion de login');
      this.router.navigateByUrl('');
      this.loginForm.reset();
    }else{
      alert('Error al ingresar los datos');
      this.loginForm.markAllAsTouched();
    }
  }

}
