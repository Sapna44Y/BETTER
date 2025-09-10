import { useState } from 'react';
import styles from './StartPage.module.scss';

const StartPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goal: '',
    propertyType: '',
    propertyUse: '',
    timeline: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would submit the form data to a server
    alert('Form submitted! In a real app, this would process your application.');
  };

  return (
    <div className={styles.startPage}>
      <div className={styles.container}>
        <div className={styles.progress}>
          <div className={styles.progressBar} style={{ width: `${(step / 3) * 100}%` }}></div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.formSection}>
            <h1>Let's get started</h1>
            
            {step === 1 && (
              <div className={styles.step}>
                <h2>What is your homeownership goal?</h2>
                <div className={styles.options}>
                  <button 
                    className={`${styles.option} ${formData.goal === 'buy' ? styles.active : ''}`}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, goal: 'buy' }));
                      handleNext();
                    }}
                  >
                    <span>Buy a home</span>
                  </button>
                  <button 
                    className={`${styles.option} ${formData.goal === 'refinance' ? styles.active : ''}`}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, goal: 'refinance' }));
                      handleNext();
                    }}
                  >
                    <span>Refinance</span>
                  </button>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className={styles.step}>
                <h2>Tell us about your property</h2>
                <div className={styles.formGroup}>
                  <label>Property type</label>
                  <select 
                    name="propertyType" 
                    value={formData.propertyType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select</option>
                    <option value="single_family">Single Family Home</option>
                    <option value="condo">Condo</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="multi_unit">Multi-Unit Property</option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <label>Property use</label>
                  <select 
                    name="propertyUse" 
                    value={formData.propertyUse}
                    onChange={handleInputChange}
                  >
                    <option value="">Select</option>
                    <option value="primary">Primary Residence</option>
                    <option value="secondary">Secondary Home</option>
                    <option value="investment">Investment Property</option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <label>When do you plan to {formData.goal === 'buy' ? 'buy' : 'refinance'}?</label>
                  <select 
                    name="timeline" 
                    value={formData.timeline}
                    onChange={handleInputChange}
                  >
                    <option value="">Select</option>
                    <option value="immediately">Immediately</option>
                    <option value="1-3_months">Within 1-3 months</option>
                    <option value="3-6_months">Within 3-6 months</option>
                    <option value="6+_months">6+ months from now</option>
                  </select>
                </div>
                
                <div className={styles.buttonGroup}>
                  <button type="button" onClick={handleBack} className={styles.backButton}>
                    Back
                  </button>
                  <button 
                    type="button" 
                    onClick={handleNext}
                    disabled={!formData.propertyType || !formData.propertyUse || !formData.timeline}
                    className={styles.nextButton}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div className={styles.step}>
                <h2>Tell us about yourself</h2>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className={styles.buttonGroup}>
                  <button type="button" onClick={handleBack} className={styles.backButton}>
                    Back
                  </button>
                  <button 
                    type="submit" 
                    onClick={handleSubmit}
                    disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                    className={styles.submitButton}
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div className={styles.sidebar}>
            <div className={styles.sidebarContent}>
              <h3>Why choose Better?</h3>
              <ul>
                <li>Fast, digital mortgage experience</li>
                <li>No hidden fees or lender fees</li>
                <li>Transparent, competitive rates</li>
                <li>24/7 support from mortgage experts</li>
              </ul>
              
              <div className={styles.testimonial}>
                <p>"Better made the mortgage process incredibly simple and saved me thousands of dollars."</p>
                <span>- Sarah J., Better customer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;