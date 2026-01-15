import Link from 'next/link';
import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css['header']}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="page1">Notes</Link>
          </li>
          <li>
            <Link href="/page2">Profile</Link>
          </li>
          <li>
            <Link href="/page3">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
