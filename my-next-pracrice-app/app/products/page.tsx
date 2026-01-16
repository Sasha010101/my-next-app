import ProductList from '@/components/ProductList/ProductList';
import { getProducts } from '@/lib/apiProducts';

const Page = async () => {
  const response = await getProducts();
  console.log('Product', response);

  return (
    <div>
      <ProductList products={response.results} />
    </div>
  );
};

export default Page;
