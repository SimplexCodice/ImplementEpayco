import React, { useEffect } from 'react'
import Script from 'next/script'

import CartItem from '@/components/ui/cart-item'
import { getOrderById } from '@/database/db-orders'
import Layout from '@/components/layouts/layout'
import CreditAlert from '@/components/ui/credit-alert'

export default function OrderPage({ order }) {

  useEffect(() => {
    let btnpay = document.getElementsByClassName('epayco-button-render')
    setTimeout(() => {
      btnpay[0].setAttribute('id','pago')
    }, 1000);
  },[])

  return (
    <Layout title={`Orden no ${order._id}`}>
      <main className='CartPage'>
        <section className='ItemsSection'>
          <div className='TitleSection'>
            <h1>Lista productos</h1>
            <CreditAlert isPaid={order.isPaid}/>
          </div>
          <div className='ListItems'>
            <CartItem product={order.product} editable={false} key={order.product.slug} />
          </div>
        </section>
        <section className='ValueSection'>
          <div className='TitleSection'>
            <h2>Resumen de orden </h2><h3>{order._id}</h3> 
          </div>
          <div className='OrderSummary'>
            <section className='ValuesSection'>
              <div className='SectionResumen1'>
                <p>N° productos</p> <span>{order.product.quantity} {order.product.quantity > 1 ? 'Productos' : 'Producto'}</span>
              </div>
              <div className='SectionResumen1'>
                <p>Subtotal</p> <span>$ {order.subTotal}</span>
              </div>
              <div className='SectionResumen1'>
                <p>impuestos (19%)</p> <span>$ {order.tax}</span>
              </div>
              <div className='SectionResumen2'>
                <p>Total</p> <span>$ {order.total}</span>
              </div>
              <CreditAlert isPaid={order.isPaid} hideAlertDestk={true}/>
            </section>
            <section className='AddressSection'>
              <div className='AddressRow'>
                <h2>Datos de entrega</h2>
              </div>
              <div className='AddressRow'>
                <div className='AddressColumn'>
                  <span>Nombre</span>
                </div>
                <div className='AddressColumn'>
                  <p>{order.firstName+' '+order.lastName}</p>
                </div>
              </div>
              <div className='AddressRow'>
                <div className='AddressColumn'>
                  <span>Teléfono o Celular</span>
                </div>
                <div className='AddressColumn'>
                  <p>{'phone'}</p>
                </div>
              </div>
              <div className='AddressRow'>
                <div className='AddressColumn'>
                  <span>Dirección</span>
                </div>
                <div className='AddressColumn'>
                  <p>{'address'}</p>
                </div>
              </div>
              <div className='AddressRow'>
                <div className='AddressColumn'>
                  <span>Identificación</span>
                </div>
                <div className='AddressColumn'>
                  <p>{'identification'}</p>
                </div>
              </div>
              <div className='AddressRow'>
                <div className='AddressColumn'>
                  <span>Información Adicional</span>
                </div>
                <div className='AddressColumn'>
                  <p>{'additionalInfo'}</p>
                </div>
              </div>
            </section>
            <div className='ButtonSection'>
              <CreditAlert isPaid={order.isPaid}/>
             {!order.isPaid && <label htmlFor="pago" className='ButtonPay' >
                Pagar
              </label>}
              <form>
                <Script 
                    src={process.env.NEXT_PUBLIC_PAYCO_CHECKOUT_URL}
                    data-epayco-key={process.env.NEXT_PUBLIC_DATA_EPAYCO_KEY}
                    data-epayco-private-key={process.env.NEXT_PUBLIC_DATA_EPAYCO_PRIVATE_KEY} 
                    class='epayco-button' 
                    data-epayco-invoice={order._id}
                    data-epayco-amount={order.total.toString()} 
                    data-epayco-tax='0.00'  
                    data-epayco-tax-ico='0.00'               
                    data-epayco-tax-base={order.total.toString()}
                    data-epayco-name='Test' 
                    data-epayco-description={order.product.name} 
                    data-epayco-currency='cop'    
                    data-epayco-country='CO' 
                    data-epayco-test='true' 
                    data-epayco-external='false' 
                    data-epayco-response={process.env.NEXT_PUBLIC_PAYCO_RESPONSE_URL}  
                    data-epayco-confirmation={process.env.NEXT_PUBLIC_PAYCO_CONFIRMATION_URL}
                    data-epayco-button='https://multimedia.epayco.co/dashboard/btns/btn3.png'
                    data-epayco-methodconfirmation="get"
                    data-epayco-type-doc-billing={'CC'}
                    data-epayco-number-doc-billing={123456789}
                    data-epayco-name-billing={order.firstName+' '+order.lastName}
                    data-epayco-mobilephone-billing={3124567891}
                /> 
              </form>
            </div>
            <br />
            <div className='ButtonSection'>
              <CreditAlert isPaid={order.isPaid} hideAlertDestk={true}/>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}


export const getServerSideProps = async ({ req, query }) => {
  const { id = '' } = query

  const order = await getOrderById(id.toString())

  if(!order){
    return {
      redirect: {
        destination: `/`,
        permanent:  false
      }
    }
  }

  return {
    props: {
      order
    }
  }
}