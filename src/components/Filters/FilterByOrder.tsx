'use client';

import { useShopContext } from '@/context/ShopContext';
import React from 'react';

function FilterByOrder() {
  const { setOrderBy } = useShopContext();

  return (
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
  );
}

export default FilterByOrder;
