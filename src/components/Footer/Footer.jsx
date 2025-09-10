
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>Products</h4>
            <Link to="/">Purchase</Link>
            <Link to="/">Refinance</Link>
            <Link to="/mortgage-calculator">Mortgage Calculator</Link>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Company</h4>
            <Link to="/about-us">About Us</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Press</Link>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Resources</h4>
            <Link to="/">Blog</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Support</Link>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Legal</h4>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Licenses</Link>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Better.com Replica. This is a demo project.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;