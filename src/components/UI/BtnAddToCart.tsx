// import { useShopContext } from '@/context/ShopContext';
// import { CartItem } from '@/types/CartType';
// import React from 'react';

// function BtnAddToCart({product}:CartItem) {
//     const { addToCart } = useShopContext();  

//   const handleAddToCart = () => {
//     const cartItem: CartItem = { 
//       ...product, 
//       quantity: 1 
//     };
//     addToCart(cartItem); 
//   };
//   return (
//     <div>
//       <button
//         onClick={handleAddToCart} // Llamamos a la función de agregar al carrito
//         className="w-[60%] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
//       >
//         Añadir al carrito
//       </button>
//     </div>
//   );
// }

// export default BtnAddToCart;
