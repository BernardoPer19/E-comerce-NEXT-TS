import { useShopContext } from '@/context/ShopContext';
import React from 'react';

function CardOfCart() {
        const { cartItems, removeToCart } = useShopContext(); 
  return (
    <div>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center mb-4"
            >
              <div className='flex items-center justify-center gap-6'>
                <img src={item.thumbnail} alt=""  className='w-10 h-10'/>
                <p className="font-medium">{item.title}</p>

                <p className="text-sm text-gray-700">Precio: ${item.price}</p>
              </div>
              <button
                onClick={() => removeToCart(item.id)}
                className="text-red-500 text-sm hover:underline"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">Tu carrito está vacío.</p>
      )}
    </div>
  );
}

export default CardOfCart;
