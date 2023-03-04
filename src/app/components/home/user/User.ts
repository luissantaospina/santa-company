export class User {
  id: string
  nombre: string
  rol_id: number
  email: string
  password: string

  constructor(
    id: string,
    nombre: string,
    rol_id: number,
    email: string,
    password: string
  )
  {
    this.id = id
    this.nombre = nombre
    this.rol_id = rol_id
    this.email = email
    this.password = password
  }
}
