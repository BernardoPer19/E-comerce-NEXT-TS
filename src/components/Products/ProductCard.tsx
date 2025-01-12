import { CartItem } from '@/types/CartType'; // Importar tipo CartItem
import Link from 'next/link';
import { HiOutlineHeart, HiSearch } from 'react-icons/hi';
import { useShopContext } from '@/context/ShopContext';
import { ProductType } from '@/types/ProdsTypes';

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useShopContext();

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      ...product,
      quantity: 1,
    };
    addToCart(cartItem);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-56 object-cover transition-transform transform hover:scale-105 duration-300"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.title}
        </h2>
        <p className="text-lg font-bold text-blue-600 mt-3">${product.price}</p>
        <div className="flex justify-center gap-3 mt-3 items-center">
          <button
            onClick={handleAddToCart} // Llamamos a la función de agregar al carrito
            className="w-[60%] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
          >
            Añadir al carrito
          </button>
          <Link href={`/products/${product.id}`}>
            <HiSearch size={30} color="#2563eb" />
          </Link>
          <HiOutlineHeart size={30} color="#ff0000" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
