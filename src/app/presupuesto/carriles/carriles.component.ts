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

  ngOnInit(): void {

    let carritoStorage = localStorage.getItem('carrito') as string;
    let carrito = JSON.parse(carritoStorage);
    this.listaItemsCarrito = carrito;

    const calcularTotal = () => {
      let suma = 0;
      for (let i = 0; i < carrito.length; i++) {
        suma += carrito[i].precio * carrito[i].cantidad;
      }

      document.getElementById('total-carrito').innerHTML =
        Number(suma).toFixed(2);
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
}
