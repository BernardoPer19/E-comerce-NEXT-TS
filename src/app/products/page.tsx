import ProductList from '@/components/ProductList';


// Este componente es un Server Component que obtiene los productos y los pasa como props.
export default async function ProductsPage() {

  return (
    <div>
      <ProductList  />
    </div>
  );
}
