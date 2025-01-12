import { ProductType } from '@/types/ProdsTypes';
import { FaStar, FaRegStar } from 'react-icons/fa';
import Reseñas from './components/Reseñas';
import Envios from './components/Envios';
import Especificaciones from './components/Especificaciones';
import ProductData from './components/ProductData';
import { JSX } from 'react';
import ImageProd from './components/ImageProd';

async function getProduct(id: number): Promise<ProductType> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Product not found');
  }
  return res.json();
}

const ProdPageID = async ({ params }: { params: { id: number } }) => {
  const { id } = params;

  const product = await getProduct(id);

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white rounded-3xl shadow-xl mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ImageProd product={product} />
        <ProductData product={product} />
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Especificaciones product={product} />
        <Envios product={product} />
      </div>

      <Reseñas product={product} />
    </div>
  );
};

export default ProdPageID;
