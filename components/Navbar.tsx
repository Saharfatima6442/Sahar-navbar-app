// components/Navbar.tsx
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li>
          <a href="/path/to/your/cv.pdf" download className={styles.cvButton}>
            Download CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
