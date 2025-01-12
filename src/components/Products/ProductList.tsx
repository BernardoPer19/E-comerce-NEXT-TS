"use client";

import { useShopContext } from '@/context/ShopContext';
import ProductCard from './ProductCard'; // Importas el componente para cada producto

const ProductList = () => {
  const { filteredProducts, loading } = useShopContext();

  return (
    <div className="bg-gray-50 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {loading ? (
          <p className="text-center text-gray-700">Cargando productos...</p>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} /> 
          ))
        ) : (
          <p className="text-center text-gray-700">No hay productos disponibles</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
