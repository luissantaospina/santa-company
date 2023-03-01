export class User {
  nombre: string;
  rol_id: number;
  email: string;
  password: string;

  constructor(
    nombre: string,
    rol_id: number,
    email: string,
    password: string
  )
  {
    this.nombre = nombre;
    this.rol_id = rol_id;
    this.email = email;
    this.password = password;
  }
}
