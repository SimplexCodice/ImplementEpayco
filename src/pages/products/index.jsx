import React from 'react'

import Layout from '@/components/layouts/layout'
import Cards from '@/components/products/cards'

const imagenZapatilla = 'https://img.freepik.com/foto-gratis/zapatilla-deporte-colores-pintando-pintura-aerosol-color-purpura_123827-23438.jpg?w=996&t=st=1707237468~exp=1707238068~hmac=03c562cf2ec829c9ec44d67a7e8970dcb1b8b0c62ae1d5952ccf4f04cbe33f60'

export default function ProductsPage() {

  const products = [
    {
      name: 'Zapatillas',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati molestias mollitia voluptatem perspiciatis commodi dolorem quibusdam maxime incidunt a harum tempora sequi quod deleniti iure.',
      spec: [
        {
          name: 'material',
          descrip: 'poliester'
        },
        {
          name: 'suela',
          descrip: 'sintetico'
        },
      ],
      sizes: ['38', '39', '40', '41'],
      images: [imagenZapatilla,imagenZapatilla,imagenZapatilla,imagenZapatilla],
      price: 50000,
      inStock: 10,
      slug: 'zapatillas_y'
    }
  ]

  return (
    <>
      <Layout title={'Productos'}>
        <div className='Products'>
          {/* <Tabs type={tab} setType={setCurrentTab} data={data}/> */}
          {/* {!filterProduct &&
            <FontAwesomeIcon icon={faSpinner} spinPulse />
          } */}
          <Cards products={products} />
        </div>
      </Layout>
    </>
  )
}
