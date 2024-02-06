import Order from "@/model/order";
import { isValidObjectId } from "mongoose";
import { db } from ".";

export const getOrderById = async (id) => {
  if(!isValidObjectId(id)){
    return null
  }

  try {
    await db.connect()
    const order = await Order.findById(id).lean()

    if(!order){
      return null
    }

    return JSON.parse(JSON.stringify(order))
  } catch (error) {
    console.log(error)
  }
}

export const payOrder = async (id) => {
  if(!isValidObjectId(id)){
    return null
  }

  try {
    await db.connect()
    const order = await Order.findById(id).lean()

    if(!order){
      return null
    }

    order.isPaid = true
    await order.save()

    return JSON.parse(JSON.stringify(order))
  } catch (error) {
    console.log(error)
  }
}