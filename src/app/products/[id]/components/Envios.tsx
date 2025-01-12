import { DetailsProps } from '@/types/CartType'
import React from 'react'

function Envios({product}: DetailsProps) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl shadow-xl">
    <h2 className="text-xl font-semibold text-gray-800">
      Envío y Garantía
    </h2>
    <ul className="mt-4 space-y-4">
      <li>
        <span className="font-medium">Garantía:</span>{' '}
        {product.warrantyInformation}
      </li>
      <li>
        <span className="font-medium">Información de Envío:</span>{' '}
        {product.shippingInformation}
      </li>
      <li>
        <span className="font-medium">Política de Devolución:</span>{' '}
        {product.returnPolicy}
      </li>
    </ul>
  </div>
  )
}

export default Envios