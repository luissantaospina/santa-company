export class Order {
  id: string;
  cliente_id: string;
  codigo: string;
  precio: number;
  fecha_compra: string;

  constructor(
    id: string,
    cliente_id: string,
    codigo: string,
    precio: number,
    fecha_compra: string
  )
  {
    this.id = id
    this.cliente_id = cliente_id
    this.codigo = codigo
    this.precio = precio
    this.fecha_compra = fecha_compra
  }
}
