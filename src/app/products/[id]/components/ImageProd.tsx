import { DetailsProps } from '@/types/CartType';
import React from 'react';

function ImageProd({product}:DetailsProps) {
  return (
    <div>
      <div className="flex justify-center">
        <div className="group relative w-full max-w-lg transition-all duration-500 hover:shadow-2xl rounded-lg overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.title}
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageProd;
