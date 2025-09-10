
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Homeownership made better</h1>
          <p>Fast, simple, and totally online. Get pre-approved in as little as 3 minutes.</p>
          <div className={styles.heroButtons}>
            <Link to="/start" className={styles.primaryButton}>Buy a home</Link>
            <Link to="/start" className={styles.secondaryButton}>Refinance</Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" alt="Home" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <div className={styles.container}>
          <h2>Why choose Better?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefit}>
              <h3>Fast & digital</h3>
              <p>Our fully digital process gets you from application to close in as little as 21 days.</p>
            </div>
            <div className={styles.benefit}>
              <h3>Transparent pricing</h3>
              <p>No hidden fees. See your rate and loan options upfront with no impact to your credit score.</p>
            </div>
            <div className={styles.benefit}>
              <h3>Expert support</h3>
              <p>Our mortgage experts are here to help you every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Ready to get started?</h2>
          <p>See your personalized rates in just a few minutes.</p>
          <Link to="/start" className={styles.ctaButton}>Check your rates</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;


