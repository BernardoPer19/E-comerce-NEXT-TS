"use client"


import { useShopContext } from '@/context/ShopContext';
import useFilters from '@/hooks/useFilters';
import { HiOutlineHeart, HiSearch } from 'react-icons/hi';


const ProductList = () => {
  
  const {filteredProducts} = useShopContext()
  
  return (
    <div className="bg-gray-50 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={prod.thumbnail}
                alt={prod.title}
                className="w-full h-56 object-cover transition-transform transform hover:scale-105 duration-300"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {prod.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {prod.description}
                </p>
                <p className="text-lg font-bold text-blue-600 mt-3">
                  ${prod.price}
                </p>
                <div className="flex justify-center gap-3 mt-3 items-center">
                  <button className="w-[60%] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors">
                    Comprar ahora
                  </button>
                  <HiSearch size={30} color='#2563eb '/>
                  <HiOutlineHeart size={30} color='#ff0000'/>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700">
            Cargando productos...
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
