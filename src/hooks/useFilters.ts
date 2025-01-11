import { ProductType } from "@/types/ProdsTypes";
import { useMemo, useState } from "react";

export const useFilters = (products: ProductType[]) => {
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

  return { category, orderBy, price, filteredProducts, setCategory, setOrderBy, setPrice };
};
