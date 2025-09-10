import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import MortgageCalculatorPage from './pages/MortgageCalculatorPage/MortgageCalculatorPage';
import StartPage from './pages/StartPage/StartPage';
import styles from './App.module.scss';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/mortgage-calculator" element={<MortgageCalculatorPage />} />
            <Route path="/start" element={<StartPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;