import { ProductType } from '@/types/ProdsTypes';
import { FaStar, FaRegStar } from 'react-icons/fa';


async function getProduct(id: string): Promise<ProductType> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Product not found');
  }
  return res.json();
}

const ProdPageID = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const product = await getProduct(id);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? <FaStar key={i} className="text-yellow-500" /> : <FaRegStar key={i} className="text-yellow-500" />);
    }
    return stars;
  };


  return (
    <div className="max-w-7xl mx-auto p-8 bg-white rounded-3xl shadow-xl mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex justify-center">
          <div className="group relative w-full max-w-lg transition-all duration-500 hover:shadow-2xl rounded-lg overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.title}
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>

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
                {(
                  product.price *
                  (1 + product.discountPercentage / 100)
                ).toFixed(2)}
              </span>
            )}
          </div>

          <p className="text-sm text-gray-500">
            Stock: <span className="text-green-600">{product.stock}</span>
          </p>
          <p className="text-sm text-gray-500">
            Disponibilidad:{' '}
            <span className="text-yellow-500">
              {product.availabilityStatus}
            </span>
          </p>

          <div className="flex items-center space-x-3">
            <span className="text-gray-800 font-semibold">Calificación: </span>
            <div className="flex">{renderStars(product.rating)}</div>
          </div>

          <div className="flex space-x-4 mt-6">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-xl shadow-lg">
              Agregar al carrito
            </button>
            <button className="bg-green-600 text-white py-3 px-6 rounded-xl shadow-lg">
              Comprar ahora
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-8 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-gray-800">
            Especificaciones del Producto
          </h2>
          <ul className="mt-4 space-y-4">
            <li>
              <span className="font-medium">Marca:</span> {product.brand}
            </li>
            <li>
              <span className="font-medium">SKU:</span> {product.sku}
            </li>
            <li>
              <span className="font-medium">Peso:</span> {product.weight} kg
            </li>
            <li>
              <span className="font-medium">Dimensiones:</span>{' '}
              {product.dimensions.width} x {product.dimensions.height} x{' '}
              {product.dimensions.depth} cm
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold text-gray-800">
            Envío y Garantía
          </h2>
          <ul className="mt-4 space-y-4">
            <li>
              <span className="font-medium">Garantía:</span>{' '}
              {product.warrantyInformation}
            </li>
            <li>
              <span className="font-medium">Información de Envío:</span>{' '}
              {product.shippingInformation}
            </li>
            <li>
              <span className="font-medium">Política de Devolución:</span>{' '}
              {product.returnPolicy}
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-800">
          Reseñas de Clientes
        </h2>
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
    </div>
  );
};

export default ProdPageID;
