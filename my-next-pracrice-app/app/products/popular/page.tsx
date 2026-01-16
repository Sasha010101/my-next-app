import ProductList from '@/components/ProductList/ProductList';
import { getPopularProduct } from '@/lib/apiProducts';

const Page = async () => {
  const popularProduct = await getPopularProduct();

  return (
    <div>
      <ProductList products={popularProduct} />
    </div>
  );
};

export default Page;
