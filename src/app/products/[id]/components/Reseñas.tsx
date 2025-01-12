import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { ProductType } from '@/types/ProdsTypes'; // Asegúrate de que este tipo esté bien definido
import { DetailsProps } from '@/types/CartType';



function Reseñas({ product }: DetailsProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} className="text-yellow-500" />
        ) : (
          <FaRegStar key={i} className="text-yellow-500" />
        )
      );
    }
    return stars;
  };

  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold text-gray-800">Reseñas de Clientes</h2>
      <div className="mt-6 space-y-6">
        {product.reviews.map((review, index) => (
          <div key={index} className="border-b pb-6">
            <div className="flex items-center space-x-4">
              <span className="font-semibold text-gray-800">
                {review.reviewerName}
              </span>
              <div className="flex ml-2">{renderStars(review.rating)}</div>
            </div>
            <p className="text-gray-600 mt-2">{review.comment}</p>
            <p className="text-sm text-gray-500 mt-2">
              {new Date(review.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reseñas;
