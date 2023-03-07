export class User {
  id: string
  name: string
  role_id: number
  email: string
  password: string

  constructor(
    id: string,
    name: string,
    role_id: number,
    email: string,
    password: string
  )
  {
    this.id = id
    this.name = name
    this.role_id = role_id
    this.email = email
    this.password = password
  }
}
