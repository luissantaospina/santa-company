export class Order {
  id: string
  client_id: string
  code: string
  price: number
  date_purchase: string

  constructor(
    id: string,
    client_id: string,
    code: string,
    price: number,
    date_purchase: string
  )
  {
    this.id = id
    this.client_id = client_id
    this.code = code
    this.price = price
    this.date_purchase = date_purchase
  }
}
