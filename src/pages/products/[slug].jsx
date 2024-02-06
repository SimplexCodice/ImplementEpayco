import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Layout from '@/components/layouts/layout'
import ButtonAdd from '@/components/ui/button-add'
import ButtonReturn from '@/components/ui/button-return'
import ItemCount from '@/components/ui/item-count'

import imagenZapatilla from '../../../public/images/zapatillas.jpg'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import tiendaApi from '@/api/tienda-api'

export default function ProductPage() {
  const router = useRouter()

  const product = {
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
    slug: 'zapatillaz_y',
    inStock: 10
  }

  const [quantityItem, setQuantityItem] = useState(1)
  const [order, setOrder] = useState({
    ...product,
    image: product.images[0],
    size: product.sizes[0]
  })

  const settings = {
    customPaging: function(i) {
      return (
        <div className='OptImage' key={i}>
          <a>
            <Image width={100} height={100} src={product.images[i]} alt={'imagen'+i} />
          </a>
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  //Func for navigate
  const navigateTo = (route) => {
    router.push(route)
  }

  const addToCart = async () => {
    // dispatch(addItem(itemObject))
    // navigateTo('/cart')
    delete order.sizes
    delete order.images
    delete order.description
    delete order.spec
    delete order.inStock
    
    order.quantity = Number(quantityItem)
    order.image = order.image.src
    
    const { data } = await tiendaApi.post('/orders',{product: order})
    
    if (data) {
      navigateTo('/orders/'+data._id)
    }
  } 

  return (
    <>
      <Layout title={`Producto ${product.slug}`}>

        <div className='Product'>

          {product && 
          <section className={`ImageSection`}>
            <Slider {...settings}>
              {product.images.length > 1 && product.images.map((image,i) => 
                <div className='MainImage' key={i}>
                  <Image width={500} height={500} src={image} alt={'imagen'+i} />
                </div>
              )}
            </Slider>
            
            {/* <div className='MainImage'>
              <Image width={550} height={550} src={currentItem.images[0]} alt={'principal'} />
            </div>
            <div className='OptionsImage'>
              {currentItem.images.length > 1 && currentItem.images.map((image,i) => 
                i > 0 &&
                <div className='OptImage' key={i}>
                  <Image width={100} height={100} src={image} alt={'imagen'+i} />
                </div>
              )}
            </div> */}
          </section>}


          <section className='InfoSection'>

            <div className='DescriptionProduct'>
              <h1>{product.name}</h1>
              <h2>$ {product.price}</h2>
              <p>{product.description}</p>
            </div>

            <div className='Specifications'>
              <h2>Especificaciones</h2>
              <ul>
                {product.spec.map((spec) => (
                   <li key={spec.name}><b>{spec.name}</b> {spec.descrip} </li>
                ))}
              </ul>
            </div>

            {/* {product.colors && product.colors.length ? <div className='OtherSpec'>
              <h2>Color</h2>
              <fieldset>
                {product.colors.map((color) => (
                  <label className={`Custom-radio ${getColor[color]} ${ product.items.find(item => item.inStock == 0 && item.color == color) ? 'soldOut' : null}`} key={color} >
                    <input type="radio" name='color' checked={currentItem.color == color} value={color} onChange={(e) => handlerOptions(e)} />
                    <span className='Show-radio'/>
                  </label>
                ))}             
              </fieldset>
            </div>: null} */}

            {product.sizes && product.sizes.length ? <div className='OtherSpec'>
              <h2>Tamaño</h2>
              <ul>
                {product.sizes.map((size) => (
                  <li key={size} name='size' value={size} className={order.size == size ? 'active' : null} onClick={() => setOrder({...order, size: size})}>
                    {size}
                  </li>
                ))}             
              </ul>
            </div> : null}
            
            <div className='CountSection'>
              <span className='QuantitySpec'>Cantidad</span> <ItemCount value={quantityItem} fun={setQuantityItem} stock={product.inStock} editable={true} />
            </div>
            
            <div className='ButtonssSection'>
              <ButtonReturn fun={navigateTo} value='/products' />
              {product.inStock ? <ButtonAdd fun={addToCart}/> : null}
            </div>

          </section>

        </div>

      </Layout>
    </>
  )
}
