import React from 'react'

//Components
import Card from './card'

export default function Cards({products}) {
  return (
    <div className='Cards'>
      {!products && 'Cargando...'}
      {products.map((product,i) => 
        <Card 
          product={product}
          key={i}
        />
      )}
    </div>
  )
}
