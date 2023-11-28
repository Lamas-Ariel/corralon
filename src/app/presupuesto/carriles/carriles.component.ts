import { Component, OnInit } from '@angular/core';
import { ItemA } from 'src/app/models/modelsA/ItemA';
//import { TarjetProductos } from 'src/app/models/ventsModel';

@Component({
  selector: 'app-carriles',
  templateUrl: './carriles.component.html',
  styleUrls: ['./carriles.component.css'],
})
export class CarrilesComponent implements OnInit {
  listaItemsCarrito: ItemA[] | undefined;
suma: number;
  ngOnInit(): void {

    let carritoStorage = localStorage.getItem('carrito') as string;
    let carrito = JSON.parse(carritoStorage);
    this.listaItemsCarrito = carrito;

    const calcularTotal = () => {
      this.suma = 0;
      for (let i = 0; i < carrito.length; i++) {
        this.suma += carrito[i].producto.precio * carrito[i].cantidad;
        console.log(carrito);
        console.log(this.suma);
      }

      /*document.getElementById('total-carrito').innerHTML =
        Number(suma).toFixed(2);*/
    };


    calcularTotal();
  }
  vaciarCarrito() {
    localStorage.clear();
    this.listaItemsCarrito = [];
    document.getElementById('total-carrito').innerHTML = '';
  }
  eliminarProducto(id: Number): void {
    this.listaItemsCarrito = this.listaItemsCarrito.filter(
      (articulo) => articulo.id !== id
    );
  }

  agregar(id: number): void {
    for (const e of this.listaItemsCarrito) {
      if(e.id == id) {
        e.cantidad = e.cantidad + 1;
      }
    }
    this.sumaTotalP();
  }

  quitar(id: number): void {
    for (const e of this.listaItemsCarrito) {
      if(e.id == id && e.cantidad>1) {
        e.cantidad = e.cantidad - 1;
      }
    }
    this.sumaTotalP();
  }

  sumaTotalP(): void {
    this.suma = 0;
    for (const i of this.listaItemsCarrito) {
      this.suma += i.producto.precio * i.cantidad;
    }
  }
}
