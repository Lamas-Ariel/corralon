import { Component, OnInit } from '@angular/core';
import { tarjetas } from 'src/app/home/data/datos';
import { Tarjeta } from 'src/app/Models/preguntasy';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})

export class PreguntasComponent implements OnInit{
lista: Tarjeta[]=[
  
];
verError: boolean = false;
listaTarjetas: Tarjeta[]=[];
  nombreBuscado: string='';
  mostrar: boolean = true;
  
constructor(){
  
}
ngOnInit(): void {
  this.listaTarjetas=tarjetas;
}
 
buscarXNombre(nombreBus:string) : void{
  
this.lista= this.listaTarjetas.filter(t => t.preguntadelUsuario.toUpperCase().includes(nombreBus.toUpperCase()));
console.log('listafiltro:',this.listaTarjetas);
if(this.lista.length == 0){
this.verError = true
} else {
  this.verError = false;
}

 

}
}