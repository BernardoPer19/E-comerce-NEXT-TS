"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { useFetch } from "@/hooks/useFetchProds";
import useFilters from "@/hooks/useFilters"; // Importa el hook
import { ProductType } from "@/types/ProdsTypes";

interface ShopContextType {
  loading: boolean;
  error: boolean;
  cartItems: ProductType[];
  setCartItems: React.Dispatch<React.SetStateAction<ProductType[]>>;
  filteredProducts: ProductType[]; 
}

interface ProviderProps {
  children: ReactNode;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopContextProvider = ({ children }: ProviderProps) => {
  const { error, loading } = useFetch();
  const { filteredProducts } = useFilters(); 
  const [cartItems, setCartItems] = useState<ProductType[]>([]);

  const value = { 
      loading,
      error,
      cartItems,
      setCartItems,
      filteredProducts, 
    }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShopContext = (): ShopContextType => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("useShopContext must be used within a ShopContextProvider");
  }

  return context;
};
