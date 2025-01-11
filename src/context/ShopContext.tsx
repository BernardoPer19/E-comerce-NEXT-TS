"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { useFetch } from "@/hooks/useFetchProds"; // Asumiendo que `useFetch` obtiene los productos
import { ProductType } from "@/types/ProdsTypes";
import { useFilters } from "@/hooks/useFilters";

interface ShopContextType {
  loading: boolean;
  error: boolean;
  cartItems: ProductType[];
  setCartItems: React.Dispatch<React.SetStateAction<ProductType[]>>;
  filteredProducts: ProductType[];
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  orderBy: string;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
}

interface ProviderProps {
  children: ReactNode;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopContextProvider = ({ children }: ProviderProps) => {
  const { error, loading, products } = useFetch(); 
  const [cartItems, setCartItems] = useState<ProductType[]>([]);

  // Uso del hook `useFilters` para obtener y manejar filtros
  const { category, orderBy, price, filteredProducts, setCategory, setOrderBy, setPrice } = useFilters(products);

  const value = {
    loading,
    error,
    cartItems,
    setCartItems,
    filteredProducts,
    category,
    setCategory,
    price,
    setPrice,
    orderBy,
    setOrderBy,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShopContext = (): ShopContextType => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("useShopContext must be used within a ShopContextProvider");
  }

  return context;
};
