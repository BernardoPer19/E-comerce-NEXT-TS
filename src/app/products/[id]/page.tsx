"use client"
import { useFetch } from '@/hooks/useFetchProds';
import { ProductType } from '@/types/ProdsTypes';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

function ProdPageID() {
  const { products, loading, error } = useFetch();
  const { id } = useParams();
  const [productID, setProductID] = useState<ProductType | null>(null);

  useEffect(() => {
    if (products && id) {
      const foundProduct = products.find((prod) => prod.id === Number(id));
      setProductID(foundProduct || null);
    }
  }, [id, products]);

  if (loading) return <div className="flex justify-center items-center h-screen bg-gray-50"><h1 className="text-2xl text-gray-800">Cargando...</h1></div>;
  if (error) return <div className="flex justify-center items-center h-screen bg-gray-50"><h1 className="text-2xl text-red-500">Error: No se pudieron cargar los productos</h1></div>;

  if (!productID) return <div className="flex justify-center items-center h-screen bg-gray-50"><h1 className="text-2xl text-gray-800">Producto no encontrado</h1></div>;

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? <FaStar key={i} className="text-yellow-500 transition-all duration-300 transform hover:scale-110" /> : <FaRegStar key={i} className="text-yellow-500 transition-all duration-300 transform hover:scale-110" />);
    }
    return stars;
  };

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white rounded-3xl shadow-xl mt-12 transition-all duration-500 hover:scale-105">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div className="flex justify-center">
          <div className="group relative w-full max-w-lg transition-all duration-500 hover:shadow-2xl rounded-lg overflow-hidden">
            <img 
              src={productID.images[0]} 
              alt={productID.title} 
              className="rounded-lg shadow-lg w-full object-cover transition-transform duration-500 transform group-hover:scale-105" 
            />
            <div className="absolute top-0 left-0 w-full h-full  opacity-30 group-hover:opacity-0 transition-opacity"></div>
          </div>
        </div>

        <div className="flex flex-col justify-start space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 transition-all duration-300">{productID.title}</h1>
          <p className="text-lg text-gray-700">{productID.description}</p>

          <div className="flex items-center justify-start space-x-8">
            <span className="text-3xl font-semibold text-green-600">${productID.price}</span>
            {productID.discountPercentage > 0 && (
              <span className="text-sm text-red-500 line-through">${(productID.price * (1 + productID.discountPercentage / 100)).toFixed(2)}</span>
            )}
          </div>

          <p className="text-sm text-gray-500">Stock: <span className="text-green-600">{productID.stock}</span></p>
          <p className="text-sm text-gray-500">Disponibilidad: <span className="text-yellow-500">{productID.availabilityStatus}</span></p>

          <div className="flex items-center space-x-3">
            <span className="text-gray-800 font-semibold">Calificación: </span>
            <div className="flex">
              {renderStars(productID.rating)}
            </div>
          </div>

          <div className="flex space-x-4 mt-6">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-700 focus:outline-none">
              Agregar al carrito
            </button>
            <button className="bg-green-600 text-white py-3 px-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-green-700 focus:outline-none">
              Comprar ahora
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
          <h2 className="text-xl font-semibold text-gray-800">Especificaciones del Producto</h2>
          <ul className="mt-4 space-y-4">
            <li><span className="font-medium">Marca:</span> {productID.brand}</li>
            <li><span className="font-medium">SKU:</span> {productID.sku}</li>
            <li><span className="font-medium">Peso:</span> {productID.weight} kg</li>
            <li><span className="font-medium">Dimensiones:</span> {productID.dimensions.width} x {productID.dimensions.height} x {productID.dimensions.depth} cm</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
          <h2 className="text-xl font-semibold text-gray-800">Envío y Garantía</h2>
          <ul className="mt-4 space-y-4">
            <li><span className="font-medium">Garantía:</span> {productID.warrantyInformation}</li>
            <li><span className="font-medium">Información de Envío:</span> {productID.shippingInformation}</li>
            <li><span className="font-medium">Política de Devolución:</span> {productID.returnPolicy}</li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-800">Reseñas de Clientes</h2>
        <div className="mt-6 space-y-6">
          {productID.reviews.map((review, index) => (
            <div key={index} className="border-b pb-6">
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-gray-800">{review.reviewerName}</span>
                <div className="flex ml-2">
                  {renderStars(review.rating)}
                </div>
              </div>
              <p className="text-gray-600 mt-2">{review.comment}</p>
              <p className="text-sm text-gray-500 mt-2">{new Date(review.date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProdPageID;
