import ProductList from '@/components/ProductList/ProductList';
import { getDiscountProducts } from '@/lib/apiProducts';

const Page = async () => {
  const discountProducts = await getDiscountProducts();
  return (
    <div>
      <ProductList products={discountProducts} />
    </div>
  );
};

export default Page;
