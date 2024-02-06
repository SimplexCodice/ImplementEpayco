import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

//Api
import tiendaApi from '@/api/tienda-api'

//Components
import Layout from '@/components/layouts/layout'


// const responses = {
//   1: 'transacción aceptada',
//   2: 'transacción rechazada',
//   3: 'transacción pendiente',
//   4: 'transacción fallida'
// }

export default function PayResponsePage({infoPay}) {

  return (
    <Layout title={`Confirmación ${infoPay.reference}`}>
      {infoPay && 
      <div className="ContainerResponse" >
          <section className="TitleResponse">
            <h3> Respuesta de la Transacción </h3>
          </section>
          <section className='IconResponse'>
          {infoPay.response == 'Aceptada' && infoPay.reason == 'Aprobada' ? 
          <FontAwesomeIcon icon={faCircleCheck} /> :
          <FontAwesomeIcon icon={faCircleExclamation} />}
          </section>
          <section className="InfoResponse"> 
            <div>
              <label>Referencia</label>
              <p id="referencia">
                {infoPay.reference}
              </p>
            </div>
            <div>
              <label>Fecha</label>
              <p id="fecha">
                {infoPay.date}
              </p>
            </div>
            <div>
              <label>Respuesta</label>
              <p id="respuesta">
                {infoPay.response}
              </p>
            </div>
            <div>
              <label>Motivo</label>
              <p id="motivo">
                {infoPay.reason}
              </p>
            </div>
            <div>
              <label>Banco</label>
              <p className="" id="banco">
                {infoPay.bank}
              </p>
            </div>
            <div>
              <label>Recibo</label>
              <p id="recibo">
                {infoPay.receiptOfPayment}
              </p>
            </div>
            <div>
              <label>Total</label>
              <p className="" id="total">
                {infoPay.total}
              </p>
            </div>
          </section>
          <section className='ButtonResponse'>
            <Link href={'/'}>
              <button className='ButtonAdd'>
                Regresar
              </button>
            </Link>
          </section>
      </div>}
    </Layout>
  )
}


export const getServerSideProps = async ({ req, query }) => {
  const { ref_payco = '' } = query

  const { data } = await tiendaApi.get('https://secure.epayco.co/validation/v1/reference/'+ref_payco)

  if (!data.success) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const info = data.data
  let infoPay

  if (info.x_cod_response == 1) {
    ecomApi.post('/orders/pay',{id:info.x_id_invoice})
    infoPay = {
      date: info.x_transaction_date,
      response: info.x_response,
      reference: info.x_id_invoice,
      reason: info.x_response_reason_text,
      receiptOfPayment: info.x_transaction_id,
      bank: info.x_bank_name,
      auth: info.x_approval_code,
      total: info.x_amount + ' ' +info.x_currency_code
    }
  }

  return {
    props: {
      infoPay
    }
  }

}