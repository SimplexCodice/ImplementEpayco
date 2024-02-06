import React from 'react'

export default function Footer() {
  
  return (
    <footer className='Footer'>
      <div className='contentFooter'>
        <div className='SectionFooter'>
          <h3>Tienda</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam debitis dolorem quam autem tempora totam deserunt delectus, iste rem! Error excepturi ab praesentium tempora nam voluptas velit mollitia fuga culpa.</p>
          <span>Llámanos al: (602) 111 111</span>
        </div>
        <div className='SectionFooter'>
          <h3>ACERCA DE ....</h3>
          <ul>
            <li>Preguntas frecuentes</li>
            <li>Quejas y sugerencias</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className='Copyright'>
        <p>@Copyright 2023 <b>....</b></p>
      </div>
    </footer>
  )
}
