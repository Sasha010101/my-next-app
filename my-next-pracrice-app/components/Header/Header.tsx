import Link from 'next/link';
import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css['header']}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/products/popular">Popular</Link>
        </li>
        <li>
          <Link href="/products/discount">Discount</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
