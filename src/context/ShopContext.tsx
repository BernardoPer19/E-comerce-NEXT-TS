"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { useFetch } from "@/hooks/useFetchProds"; // Suponiendo que tienes un hook para obtener productos
import { ProductType } from "@/types/ProdsTypes";

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

  // Estados de los filtros
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<number>(1000); 
  const [orderBy, setOrderBy] = useState<string>("default");

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const isCategoryMatch = category ? product.category === category : true;
      const isPriceMatch = product.price <= price;
      return isCategoryMatch && isPriceMatch;
    });

    // Aplicar orden después del filtrado
    switch (orderBy) {
      case 'asc':
        return [...filtered].sort((a, b) => a.price - b.price); 
      case 'desc':
        return [...filtered].sort((a, b) => b.price - a.price); 
      default:
        return filtered; 
    }
  }, [products, category, price, orderBy]); 

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
    setOrderBy, // Para poder actualizar el orden
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
