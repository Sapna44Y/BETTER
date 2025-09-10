import { useState } from 'react';
import styles from './CalculatorForm.module.scss';

const CalculatorForm = () => {
  const [homePrice, setHomePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [propertyTax, setPropertyTax] = useState(265);
  const [homeInsurance, setHomeInsurance] = useState(100);
  const [hoa, setHoa] = useState(0);

  const calculateMortgage = () => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    // Mortgage payment formula
    const mortgagePayment = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    // Additional monthly costs
    const monthlyTax = propertyTax / 12;
    const monthlyInsurance = homeInsurance / 12;
    const monthlyHoa = hoa;
    
    return {
      principal: principal.toFixed(2),
      monthlyPayment: (mortgagePayment + monthlyTax + monthlyInsurance + monthlyHoa).toFixed(2),
      mortgageOnly: mortgagePayment.toFixed(2),
      tax: monthlyTax.toFixed(2),
      insurance: monthlyInsurance.toFixed(2),
      hoa: monthlyHoa.toFixed(2)
    };
  };

  const results = calculateMortgage();

  return (
    <div className={styles.calculator}>
      <div className={styles.inputs}>
        <div className={styles.inputGroup}>
          <label htmlFor="homePrice">Home Price</label>
          <input
            type="range"
            id="homePrice"
            min="100000"
            max="2000000"
            step="50000"
            value={homePrice}
            onChange={(e) => setHomePrice(parseInt(e.target.value))}
          />
          <span>${homePrice.toLocaleString()}</span>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="downPayment">Down Payment</label>
          <input
            type="range"
            id="downPayment"
            min="0"
            max={homePrice}
            step="10000"
            value={downPayment}
            onChange={(e) => setDownPayment(parseInt(e.target.value))}
          />
          <span>${downPayment.toLocaleString()}</span>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="loanTerm">Loan Term</label>
          <select
            id="loanTerm"
            value={loanTerm}
            onChange={(e) => setLoanTerm(parseInt(e.target.value))}
          >
            <option value="30">30 years</option>
            <option value="15">15 years</option>
            <option value="10">10 years</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="interestRate">Interest Rate</label>
          <input
            type="range"
            id="interestRate"
            min="2"
            max="10"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
          />
          <span>{interestRate}%</span>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="propertyTax">Property Tax (yearly)</label>
          <input
            type="range"
            id="propertyTax"
            min="0"
            max="10000"
            step="100"
            value={propertyTax}
            onChange={(e) => setPropertyTax(parseInt(e.target.value))}
          />
          <span>${propertyTax}</span>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="homeInsurance">Home Insurance (yearly)</label>
          <input
            type="range"
            id="homeInsurance"
            min="0"
            max="5000"
            step="100"
            value={homeInsurance}
            onChange={(e) => setHomeInsurance(parseInt(e.target.value))}
          />
          <span>${homeInsurance}</span>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="hoa">HOA Fees (monthly)</label>
          <input
            type="range"
            id="hoa"
            min="0"
            max="1000"
            step="10"
            value={hoa}
            onChange={(e) => setHoa(parseInt(e.target.value))}
          />
          <span>${hoa}</span>
        </div>
      </div>

      <div className={styles.results}>
        <h3>Your monthly payment</h3>
        <div className={styles.monthlyPayment}>${results.monthlyPayment}</div>
        
        <div className={styles.breakdown}>
          <div className={styles.breakdownItem}>
            <span>Principal & Interest</span>
            <span>${results.mortgageOnly}</span>
          </div>
          <div className={styles.breakdownItem}>
            <span>Property Taxes</span>
            <span>${results.tax}</span>
          </div>
          <div className={styles.breakdownItem}>
            <span>Home Insurance</span>
            <span>${results.insurance}</span>
          </div>
          <div className={styles.breakdownItem}>
            <span>HOA Fees</span>
            <span>${results.hoa}</span>
          </div>
        </div>
        
        <div className={styles.loanSummary}>
          <h4>Loan Summary</h4>
          <div className={styles.summaryItem}>
            <span>Loan amount</span>
            <span>${results.principal}</span>
          </div>
          <div className={styles.summaryItem}>
            <span>Total interest paid</span>
            <span>${(results.mortgageOnly * loanTerm * 12 - (homePrice - downPayment)).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorForm;