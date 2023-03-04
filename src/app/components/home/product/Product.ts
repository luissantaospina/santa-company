export class Product {
  id: string;
  cantidad: number;
  categoria: string;
  codigo: string;
  descripcion: string;
  nombre: string;
  precio: number;

  constructor(
    id: string,
    cantidad: number,
    categoria: string,
    codigo: string,
    descripcion: string,
    nombre: string,
    precio: number
  )
  {
    this.id = id;
    this.cantidad = cantidad;
    this.categoria = categoria;
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.nombre = nombre;
    this.precio = precio;
  }
}
