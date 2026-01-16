import { Product } from '@/types/products';
import css from './ProductList.module.css';
import Link from 'next/link';
interface Products {
  products: Product[];
}

const ProductList = ({ products }: Products) => {
  return (
    <div className={css['productList']}>
      <ul>
        {products.map(elem => {
          return (
            <li key={elem._id}>
              <Link href={`/products/${elem._id}`}>
                <p>{elem.name}</p>
                <p>{elem.price}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
