import Filters from '@/components/Filters/Filters';
import ProductList from '@/components/Products/ProductList';



export default async function ProductsPage() {

  return (
    <div>
      <Filters/>
      <ProductList  />
    </div>
  );
}
