export class Client {
  id: string;
  nombre: string;
  login: string;

  constructor(
    id: string,
    nombre: string,
    login: string
  )
  {
    this.id = id
    this.nombre = nombre
    this.login = login
  }
}
