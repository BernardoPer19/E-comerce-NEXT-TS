import React from 'react'

function SearchForm() {
  return (
    <form className="flex items-center w-full space-x-4">
      <input
        type="text"
        placeholder="Buscar productos..."
        className="flex p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Buscar
      </button>
    </form>
  )
}

export default SearchForm
