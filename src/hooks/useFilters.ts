'use client';
import { useState } from 'react';
import { useFetch } from './useFetchProds';
import { ProductType } from '@/types/ProdsTypes';

const useFilters = () => {
  const { products } = useFetch();
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [category, setCategory] = useState<string>('');

  const filteredProducts = products.filter((prod) => {
    const matchesPrice =
      prod.price >= priceRange.min && prod.price <= priceRange.max;
    const matchesCategory = category ? prod.category === category : true;

    

    return matchesPrice && matchesCategory;
  });

  console.log('Filtered Products:', filteredProducts);
  const handlePriceChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };
  return {
    filteredProducts,
    setPriceRange,
    setCategory,
    handlePriceChange,
  };
};

export default useFilters;
