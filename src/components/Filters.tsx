"use client"

import React from 'react';
import SearchForm from './SearchForm';
import useFilters from '@/hooks/useFilters';

function Filters() {
  const { filteredProducts, handlePriceChange, setCategory } = useFilters();

  return (
    <div className="bg-white p-6 rounded-lg flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 space-x-0 md:space-x-6 mx-auto max-w-[1280px]">
      {/* Buscador */}
      <div className="flex-1 w-full md:w-auto">
        <SearchForm />
      </div>

      {/* Filtros a la derecha */}
      <div className="space-y-4 md:space-y-0 md:space-x-6 flex flex-col md:flex-row items-center w-full md:w-auto">
        {/* Filtro de categorías */}
        <div className="flex flex-col">
          <label htmlFor="category" className="text-sm font-semibold text-gray-600 mb-1">
            Categoría
          </label>
          <select
            name="category"
            id="category"
            onChange={(e) => setCategory(e.target.value)} // Correcto
            className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Seleccionar categoría</option>
            <option value="electronics">Electrónica</option>
            <option value="fashion">Moda</option>
            <option value="beauty">Belleza</option>
            <option value="home">Hogar</option>
          </select>
        </div>

        {/* Filtro de precio */}
        <div className="flex flex-col">
          <label htmlFor="price" className="text-sm font-semibold text-gray-600 mb-1">
            Precio: ${filteredProducts[0]?.price || 0} - ${filteredProducts[filteredProducts.length - 1]?.price || 1000}
          </label>
          <input
            type="range"
            name="price"
            id="price"
            min="0"
            max="1000"
            step="10"
            onChange={(e) => handlePriceChange(0, Number(e.target.value))}
            className="w-full mt-1 p-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Filters;
