import { DetailsProps } from '@/types/CartType';
import React from 'react';

function Especificaciones({product}:DetailsProps) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl shadow-xl">
      <h2 className="text-xl font-semibold text-gray-800">
        Especificaciones del Producto
      </h2>
      <ul className="mt-4 space-y-4">
        <li>
          <span className="font-medium">Marca:</span> {product.brand}
        </li>
        <li>
          <span className="font-medium">SKU:</span> {product.sku}
        </li>
        <li>
          <span className="font-medium">Peso:</span> {product.weight} kg
        </li>
        <li>
          <span className="font-medium">Dimensiones:</span>{' '}
          {product.dimensions.width} x {product.dimensions.height} x{' '}
          {product.dimensions.depth} cm
        </li>
      </ul>
    </div>
  );
}

export default Especificaciones;
