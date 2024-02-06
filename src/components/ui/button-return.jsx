import React from 'react'

export default function ButtonReturn({fun,value,text = '- Voler'}) {
  return (
    <button className='ButtonReturn' onClick={() => fun(value)}> 
      {text}
    </button>
  )
}
