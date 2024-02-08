import Order from "@/model/order"
import { db } from "@/database" 
import { isValidObjectId } from "mongoose"

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return getOrder(req,res)
    default:
      return res.status(400).json({ message: 'Bad Request' })
  }
}

//Controllers
const getOrder = async (req, res) => {
  
  const { x_response, x_id_factura } = req.query
  
  if( !x_response || !x_id_factura) return res.status(200).json('request accepted whithout query parameters')

  if( x_response.toLowerCase() != 'aceptada') return res.status(200).json('request accepted but denied transaction')

  const order = await payOrder(x_id_factura)
  
  if (!order) return res.status(200).json('request accepted and transaction approved, but not found order in db')

  return res.status(200).json('request accepted and transaction approved')
}

const payOrder = async (id) => {
  
  if(!isValidObjectId(id)){
    return false
  }

  try {
    await db.connect()
    const order = await Order.findByIdAndUpdate(id,{isPaid:true})

    if(!order){
      return false
    }

    return true
  } catch (error) {

    console.log(error)
    return false
  }
  
}