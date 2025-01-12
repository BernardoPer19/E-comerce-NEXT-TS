'use client';

import { useShopContext } from '@/context/ShopContext';
import React from 'react'

function FilterByPrice() {
  const { price, setPrice } = useShopContext();

  return (
              <div className="flex flex-col">
          <label
            htmlFor="price"
            className="text-sm font-semibold text-gray-600 mb-1"
          >
            Precio: $0,99 - 799.99
          </label>
          <input
            type="range"
            name="price"
            id="price"
            min={0.99}
            max={799.99}
            step="1"
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full mt-1 p-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={price}
          />
          {`products >= ${price} `}
    </div>
  )
}

export default FilterByPrice
