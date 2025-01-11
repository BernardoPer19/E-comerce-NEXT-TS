'use client';

import React, { useState, useEffect } from 'react';
import { useShopContext } from '@/context/ShopContext';
import SearchForm from './SearchForm';
import { ProductType } from '@/types/ProdsTypes';

function Filters() {
  const { category, setCategory, price, setPrice, filteredProducts,setOrderBy } =
    useShopContext();

  

  // Obtener el precio mínimo y máximo de los productos filtrados
  const minPrice = Math.min(...filteredProducts.map((prod) => prod.price), 0);
  const maxPrice = Math.max(
    ...filteredProducts.map((prod) => prod.price),
    1000,
  );

 

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
            onChange={(e) => setCategory(e.target.value)} // Actualiza la categoría en el contexto
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
            onChange={(e) => setOrderBy(e.target.value)} // Actualiza el orden
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
            Precio: ${minPrice} - ${maxPrice}
          </label>
          <input
            type="range"
            name="price"
            id="price"
            min={minPrice}
            max={maxPrice}
            step="100"
            onChange={(e) => setPrice(Number(e.target.value))} // Actualiza el precio en el contexto
            className="w-full mt-1 p-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={price}
          />
          {`>${price}`}
        </div>
      </div>
    </div>
  );
}

export default Filters;
