import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function Navbar() {

  const router = useRouter()

  //Local states
  const [location, setlocation] = useState('')

  useEffect(()=>{
    setlocation(router.pathname.split('/')[1])
  },[])

  return (
    <nav className='Navbar'>
      <ul className='items'>
        
        <input type="checkbox" id='Menu'/>
        <li className='item CompanyName'>
          <Link href="/">TIENDA</Link>
        </li>
        <li className='item'>
          <ul>
            <li><Link href="/" className={location != '' ? null : 'active'} >HOME</Link></li>
            <li><Link href="/products" className={location.includes('products') ? 'active' : null} >PRODUCTOS</Link></li>
            <li><Link href="/aboutus" className={location.includes('aboutus') ? 'active' : null}>NOSOTROS</Link></li>
          </ul>
        </li>
        <li className={'iconsItem item'}>
          <div> 
            {/* <FontAwesomeIcon icon={faShoppingCart} onClick={() => navigateTo('/cart')} />  */}
            {/* {numberOfItems ? <span className='FloatNumber'>{numberOfItems}</span> : null} */}
          </div>
          {/* {user.isLoggedIn && <FontAwesomeIcon icon={faUser} onClick={() => setAdminBar(!adminBar)}/>} */}
          {/* {user.isLoggedIn && adminBar &&
            <nav className='AdminBar'>
              <ul>
                <li>
                  <Link href='/admin/products'>
                    Dashboard <FontAwesomeIcon icon={faShapes} />
                  </Link>
                </li>
                <li onClick={onLogout}>
                  Salir <FontAwesomeIcon icon={faRightFromBracket} />
                </li>
              </ul>
            </nav>
          } */}
          {/* <FontAwesomeIcon icon={faSearch} /> */}
        </li>
        <li className='MenuBtn'>
          <label htmlFor="Menu">
            {/* <FontAwesomeIcon icon={!menuType ? faBars : faTimes} /> */}
          </label>
        </li>
      </ul>
    </nav>
  )
}
