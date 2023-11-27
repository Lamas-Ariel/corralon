import { FacturaA } from "./FacturaA"
import { ProductosA } from "./ProductosA"

export class ItemA {
  id: number;
  factura?: FacturaA;
  producto?: ProductosA;
  cantidad: number;
}