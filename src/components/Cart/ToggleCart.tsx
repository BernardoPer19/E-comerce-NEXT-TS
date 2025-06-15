'use client';
import { useShopContext } from '@/context/ShopContext';
import Link from 'next/link';
import React, { useState } from 'react';
import CardOfCart from './CardOfCart';

function ToggleCart() {
  const [toggleCart, setToggleCart] = useState(false);
  const { cartItems, clearCart } = useShopContext();
  const toggleMenuCart = () => setToggleCart(!toggleCart);

  return (
    <div className="relative">
      <button
        onClick={toggleMenuCart}
        className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
      >
        🛒 <span className="ml-1">{cartItems.length}</span>
      </button>

      
      {toggleCart && (
        <div className="absolute right-0 mt-2 w-[500px] bg-white border shadow-lg p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Tu Carrito</h2>
          <CardOfCart />
          <div className="mt-4 flex justify-between">
            <Link
              href="/products"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Ir a Pagar
            </Link>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={clearCart}
            >Eliminar Todo</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ToggleCart;
