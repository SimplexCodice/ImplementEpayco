import mongoose, { Schema, model} from "mongoose";

const orderSchema = new Schema({

  product: 
    {
      name: { type: String, required: true },
      size: { type: String},
      color: { type: String},
      quantity: { type: Number, required: true },
      slug: { type: String, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
    }
  ,
  
  firstName : { type: String, required: true },
  lastName : { type: String, required: true },

  subTotal: { type: Number, required: true },
  tax: { type: Number, required: true },
  total: { type: Number, required: true },

  isPaid: { type: Boolean, required: true, default: false},
  paidAt: {type: String},

  transactionId: {type: String}
},{
  timestamps: true
})

const Order = mongoose.models.Order || model('Order',orderSchema)

export default Order