import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <svg width="104" height="32" viewBox="0 0 104 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M52.049 10.667h-3.204v10.666h3.204V10.667zM60.122 10.667h-3.205v10.666h3.205V10.667zM68.196 10.667H65v10.666h3.196V10.667zM76.27 10.667h-3.205v10.666h3.205V10.667zM84.343 10.667h-3.204v10.666h3.204V10.667zM92.417 10.667h-3.205v10.666h3.205V10.667zM100.49 10.667h-3.204v10.666h3.204V10.667zM36.392 16.333c0-3.676-2.976-6.666-6.637-6.666H17.647v13.333h12.108c3.661 0 6.637-2.99 6.637-6.667zm-10.245 0c0 1.843-1.492 3.333-3.323 3.333h-2.177V13h2.177c1.831 0 3.323 1.49 3.323 3.333z" fill="#000"/>
            <path d="M0 10.667h3.196v10.666H0V10.667zM8.074 10.667H4.87v10.666h3.204V10.667zM16.147 10.667h-3.204v10.666h3.204V10.667zM24.22 10.667H21.02v10.666h3.201V10.667zM32.294 10.667h-3.204v10.666h3.204V10.667zM40.368 10.667h-3.205v10.666h3.205V10.667zM48.441 10.667h-3.204v10.666h3.204V10.667z" fill="#00D56F"/>
          </svg>
        </Link>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link to="/" className={styles.navLink}>Purchase</Link>
          <Link to="/" className={styles.navLink}>Refinance</Link>
          <Link to="/mortgage-calculator" className={styles.navLink}>Calculators</Link>
          <Link to="/about-us" className={styles.navLink}>About Us</Link>
          <Link to="/start" className={styles.ctaButton}>Get Started</Link>
        </nav>
        
        <button 
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;