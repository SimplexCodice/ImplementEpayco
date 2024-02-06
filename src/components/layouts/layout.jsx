import React from 'react'
import Navbar from '../ui/navbar'
import Head from 'next/head'
import Footer from '../ui/footer'

export default function Layout({title,children}) {
  return (
      <div className='Layout'>
        <Head>
          <title>{title}</title>
          <meta name="description" content="Tienda virtual" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />  
        </Head>
        <Navbar/>
        {children}
        <Footer />
    </div>
  )
}
