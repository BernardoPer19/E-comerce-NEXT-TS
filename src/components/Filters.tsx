'use client';

import { useShopContext } from '@/context/ShopContext';
import SearchForm from './SearchForm';

function Filters() {
  const {
    category,
    setCategory,
    price,
    setPrice,
    setOrderBy,
  } = useShopContext();


  return (
    <div className="bg-white p-6 rounded-lg flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 space-x-0 md:space-x-6 mx-auto max-w-[1280px]">
      <div className="flex-1 w-full md:w-auto">
        <SearchForm />
      </div>

      <div className="space-y-4 md:space-y-0 md:space-x-6 flex flex-col md:flex-row items-center w-full md:w-auto">
        <div className="flex flex-col">
          <label
            htmlFor="category"
            className="text-sm font-semibold text-gray-600 mb-1"
          >
            Categoría
          </label>
          <select
            name="category"
            id="category"
            onChange={(e) => setCategory(e.target.value)} 
            className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={category}
          >
            <option value="">Seleccionar categoría</option>
            <option value="groceries">Comestibles</option>
            <option value="beauty">Belleza</option>
            <option value="fragrances">Fragancias</option>
            <option value="furniture">Muebles</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="sortBy"
            className="text-sm font-semibold text-gray-600 mb-1"
          >
            Ordenar por precio
          </label>
          <select
            name="sortBy"
            id="sortBy"
            onChange={(e) => setOrderBy(e.target.value)} 
            className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="default">Sin orden</option>
            <option value="asc">Menor a mayor</option>
            <option value="desc">Mayor a menor</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="price"
            className="text-sm font-semibold text-gray-600 mb-1"
          >
            Precio: $0,99 - 799.99
          </label>
          <input
            type="range"
            name="price"
            id="price"
            min={0.99}
            max={799.99}
            step="1" 
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full mt-1 p-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={price}
          />
          {`products >= ${price} `}
        </div>
      </div>
    </div>
  );
}

export default Filters;
