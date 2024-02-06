import React from 'react'

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

export default function CreditAlert({isPaid,hideAlertDestk=false}) {
  if(isPaid)  
  return (<div className={`PayIconSection ${hideAlertDestk ? 'hideAlert' : 'showAlert'}`}><FontAwesomeIcon icon={faCreditCard} className='paid' /> <span className='paid'>Orden pagada</span> </div>) 
     
  return (<div className={`PayIconSection ${hideAlertDestk ? 'hideAlert' : 'showAlert'}`}><FontAwesomeIcon icon={faCreditCard} /> <span >Orden sin pagar</span> </div>)
}
