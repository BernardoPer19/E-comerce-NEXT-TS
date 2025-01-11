import { ProductType } from '@/types/ProdsTypes';
import { useEffect, useState } from 'react';

export const useFetch = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const getProdAPI = async (): Promise<ProductType[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
   
    if (!res.ok) {
      throw new Error('Error al hacer el fetch de datos');
    }
    const data = await res.json();
    return data.products;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsAPI = await getProdAPI();
        setProducts(productsAPI);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return {
    products,loading,error
  }
};
