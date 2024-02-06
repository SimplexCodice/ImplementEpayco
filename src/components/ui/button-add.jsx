import React from 'react'

export default function ButtonAdd({fun,value,text = 'Añadir al carrito',colorInverse=false}) {
  return (
    <button className={`ButtonAdd ${colorInverse ? 'inverse' : null}`} onClick={() => fun(value)}>
      {text}
    </button>
  )
}
