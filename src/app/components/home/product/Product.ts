export class Product {
  id: string
  amount: number
  category: string
  code: string
  description: string
  name: string
  price: number

  constructor(
    id: string,
    amount: number,
    category: string,
    code: string,
    description: string,
    name: string,
    price: number
  )
  {
    this.id = id
    this.amount = amount
    this.category = category
    this.code = code
    this.description = description
    this.name = name
    this.price = price
  }
}
