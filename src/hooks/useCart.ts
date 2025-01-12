import { useState } from 'react';
import { CartItem } from '@/types/CartType';

const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(item => item.id === product.id);
      if (existingProduct) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, product];
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const removeToCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  return { cartItems, addToCart, clearCart, removeToCart };
};

export default useCart;
