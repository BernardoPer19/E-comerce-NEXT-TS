"use client"
import React, { createContext, useContext, ReactNode } from 'react';
import { useFetch } from '@/hooks/useFetchProds';
import { ProductType } from '@/types/ProdsTypes';
import { useFilters } from '@/hooks/useFilters';
import useCart from '@/hooks/useCart';
import { CartItem } from '@/types/CartType'; 

interface ShopContextType {
  loading: boolean;
  error: boolean;
  filteredProducts: ProductType[];
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  orderBy: string;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
  cartItems: CartItem[]; 
  addToCart: (product: CartItem) => void; 
  clearCart: () => void; 
  removeToCart: (productId: number) => void;
}

interface ProviderProps {
  children: ReactNode;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopContextProvider = ({ children }: ProviderProps) => {
  const { error, loading, products } = useFetch();
  const {
    category,
    orderBy,
    price,
    filteredProducts,
    setCategory,
    setOrderBy,
    setPrice,
  } = useFilters(products);
  const { cartItems, addToCart, clearCart, removeToCart } = useCart();

  const value = {
    loading,
    error,
    filteredProducts,
    category,
    setCategory,
    price,
    setPrice,
    orderBy,
    setOrderBy,
    cartItems,
    addToCart, // Aquí el addToCart debe estar bien tipado
    clearCart,
    removeToCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShopContext = (): ShopContextType => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error('useShopContext must be used within a ShopContextProvider');
  }

  return context;
};
