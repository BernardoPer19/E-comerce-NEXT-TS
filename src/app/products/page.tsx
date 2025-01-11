import Filters from '@/components/Filters';
import ProductList from '@/components/ProductList';



export default async function ProductsPage() {

  return (
    <div>
      <Filters/>

      <ProductList  />
    </div>
  );
}
