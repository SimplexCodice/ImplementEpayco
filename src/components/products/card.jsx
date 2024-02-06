import React from 'react'
import Image from 'next/image';

import { useRouter } from 'next/router';

export default function Card({product}) {

  const { 
    slug, 
    name,
    price,
    images
  } = product

  const router = useRouter()

  const navigate = (route) => {
    router.push(route)
  }

  return (
    <div className={`Card`}>
      <div className='imgCard' onClick={() => navigate(`/products/${slug}`)}>
        <Image src={images[0]} width={150} height={150} alt={'imagen '+name}/>
      </div>
      <div className='contentCard'>
        <div className='description'>
          <p className='productD'>
            {name}
          </p>
          {/* <FontAwesomeIcon icon={faHeart} /> */}
        </div>
        <div className='price'>
          $ {price}
        </div>
      </div>
    </div>
  )
}
