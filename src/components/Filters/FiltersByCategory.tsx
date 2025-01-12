import { useShopContext } from '@/context/ShopContext';
import React from 'react';

function FiltersByCategory() {
    const { category, setCategory } = useShopContext();

  return (
    <div>
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
    </div>
  );
}

export default FiltersByCategory;
