import { Categoria } from "./Categoria";


export class Producto{
    id:number;
    caracteristica: string;
    descripcion: string;
    fecha_v: Date;
    foto: string;
    marca: string;
    nom: string;
    precio: number;
    categoria: Categoria;
    
    constructor(){
        
    }
}
