import React from 'react'

export default function ItemCount({ value, fun, stock, limit = stock, editable = false }) {
  
  const change = (current) => {
      if( ((current <= stock)) && 
          ((current > 0)) && 
          ((current <= limit)) 
          ){
          fun(current)
      }
  }

  return (
    <div className={`QuantitySelector ${!editable && 'noeditable'}`}>
      {editable && <button onClick={() => change(value-1)}>
        -
      </button>}
      <span>
        {value} {!editable ? (value > 1 ? 'Productos' : 'Producto') : null}
      </span>
      {editable && <button onClick={() => change(value+1)}>
        +
      </button>}
    </div>
  )
}
