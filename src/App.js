import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Website from './components/Website';
import Localization from './components/Localization';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="website" element={<Website />} />
        <Route path="localization" element={<Localization />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
