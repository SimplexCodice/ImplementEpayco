import React from 'react'
import Image from 'next/image'

import ItemCount from './item-count'

export default function CartItem({product}) {
  
  

  return (
    <div className='CartItem'>
      <div className='ImageSection'>
        <Image
          src={product.image}
          alt='imagen cart'
          width={100}
          height={100}
        />
      </div>
      <div className='Description'>
          <div className='Section1'>
            <p>{product.name}</p> <span>$ {product.price}</span>
          </div>
          <div className='Section2'>
            {/* {product.color && <div className='InfoAndRemove'>
              <p>Color</p> 
              <RadioCheck color={getColor[product.color]}/>
              <span>{product.color}</span>
              {editable && <div className='RemoveItem' onClick={() => removeItemCart()}>
                X Remover
              </div>}
            </div>} */}
            {product.size && <div className='InfoAndRemove'>
              <p>Tamaño</p> 
              <span>{product.size}</span>
            </div>}
            <div className='Options'>
              <ItemCount value={product.quantity} stock={product.inStock} />
            </div>
          </div>
      </div>
    </div>
  )
}
