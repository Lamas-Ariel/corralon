import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioA } from 'src/app/models/modelsA/UsuarioA';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  listaItemsUsuario: UsuarioA[] | undefined;
  usuarioLogin:UsuarioA;
  user:string = '';
  passw:string='';
  error:boolean = false;
  listaUsuario: UsuarioA[]=[];
  contra:string;
  correo:string;

  constructor(private usuarioService: UsuarioService , private router:Router) {

  }

  ngOnInit(): void {
    this.usuarioService.getTodos().subscribe( response => {
      console.log("lista de Usuarios:",response);
      this.listaUsuario= response;
      console.log("lista de Usuarios del ts: ",this.listaUsuario);
      const list=this.listaUsuario[0]
      console.log()
    })
  }

  // metodo de validacion en la parte para el inicio de de sesion
  validate():void {
    for(const usuario of this.listaUsuario){
      this.contra = String(usuario.password)
      this.correo = usuario.correo
      console.log(this.user);
      if (this.user=== this.correo && this.passw===this.contra) {
        //obtener el usuario registrados
          this.usuarioService.getXid(usuario.id).subscribe(response =>{
          this.usuarioLogin=response;
          console.log('usuario ingresado',this.usuarioLogin);
        })
        console.log(this.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Inicio exitoso",
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['producto']);
      } else {
        this.error=true;
      }
    }   
  }

  
}
