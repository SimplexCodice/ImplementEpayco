import React from 'react'

import imagenZapatilla from '../../../public/images/zapatillas.jpg'

import Layout from '@/components/layouts/layout'
import Cards from '@/components/products/cards'

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
