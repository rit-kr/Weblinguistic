import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Website from './components/Website';
import Localization from './components/Localization';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="website" element={<Website />} />
        <Route path="localization" element={<Localization />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
