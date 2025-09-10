import CalculatorForm from '../../components/MortgageCalculator/CalculatorForm';
import styles from './MortgageCalculatorPage.module.scss';

const MortgageCalculatorPage = () => {
  return (
    <div className={styles.mortgageCalculatorPage}>
      <div className={styles.hero}>
        <div className={styles.container}>
          <h1>Mortgage Calculator</h1>
          <p>Estimate your monthly mortgage payment with our easy-to-use calculator</p>
        </div>
      </div>
      
      <CalculatorForm />
      
      <div className={styles.infoSection}>
        <div className={styles.container}>
          <h2>Understanding your mortgage payment</h2>
          <p>
            Your monthly mortgage payment typically includes four components: 
            principal, interest, property taxes, and homeowners insurance (PITI). 
            If your down payment is less than 20%, you may also have to pay private mortgage insurance (PMI).
          </p>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculatorPage;