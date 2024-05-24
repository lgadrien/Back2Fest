import React from 'react'
import PaymentOptions from './PaiementOptions'

const Checkout = () => {
  return (
    <div className="bg-slate-800 container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-white">Finaliser votre commande</h1>
      <PaymentOptions />
      <div className="p-10">

      </div>
    </div>
  )
}

export default Checkout