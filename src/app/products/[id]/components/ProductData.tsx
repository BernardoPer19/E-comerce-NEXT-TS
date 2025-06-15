import { useShopContext } from '@/context/ShopContext';
import { CartItem, DetailsProps } from '@/types/CartType';
import React, { JSX } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

function ProductData({ product }: DetailsProps) {
  const { addToCart } = useShopContext();

  const renderStars = (rating: number): JSX.Element[] => {
    const stars: JSX.Element[] = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} className="text-yellow-500" />
        ) : (
          <FaRegStar key={i} className="text-yellow-500" />
        ),
      );
    }
    return stars;
  };

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      ...product,
      quantity: 1,
    };
    addToCart(cartItem);
  };

  return (
    <div>
      <div className="flex flex-col justify-start space-y-6">
        <h1 className="text-5xl font-bold text-gray-900">{product.title}</h1>
        <p className="text-lg text-gray-700">{product.description}</p>

        <div className="flex items-center justify-start space-x-8">
          <span className="text-3xl font-semibold text-green-600">
            ${product.price}
          </span>
          {product.discountPercentage > 0 && (
            <span className="text-sm text-red-500 line-through">
              $
              {(product.price * (1 + product.discountPercentage / 100)).toFixed(
                2,
              )}
            </span>
          )}
        </div>

        <p className="text-sm text-gray-500">
          Stock: <span className="text-green-600">{product.stock}</span>
        </p>
        <p className="text-sm text-gray-500">
          Disponibilidad:{' '}
          <span className="text-yellow-500">{product.availabilityStatus}</span>
        </p>

        <div className="flex items-center space-x-3">
          <span className="text-gray-800 font-semibold">Calificación: </span>
          <div className="flex">{renderStars(product.rating)}</div>
        </div>

        <div className="flex space-x-4 mt-6">
          <button 
          onClick={handleAddToCart}
          className="bg-blue-600 text-white py-3 px-6 rounded-xl shadow-lg">
            Agregar al carrito
          </button>
          <button className="bg-green-600 text-white py-3 px-6 rounded-xl shadow-lg">
            Comprar ahora
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductData;
