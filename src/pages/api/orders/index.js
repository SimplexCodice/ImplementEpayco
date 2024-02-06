import { db } from "@/database"
import Order from "@/model/order"

export default function handler(req, res) {
  switch (req.method) {
    case 'POST':
      return createOrder(req,res)
    default:
      return res.status(400).json({ message: 'Bad request' })
  }
}

const createOrder = async (req, res) => {
  
  const { product } = req.body
  
  try {
    await db.connect()

    const order = {
      product,
      firstName: 'ClienteName test',
      lastName: 'ClienteLastname test',
      total: product.price * product.quantity,
      subTotal: 0,
      tax : 0,
      isPaid: false
    }

    const newOrder = new Order(order)
    await newOrder.save()

    return res.status(201).json(newOrder)
    
  } catch (error) {
    console.log({createOrderError: error})
    return res.status(500).json({ message: 'Error en el servidor' })
  }
}