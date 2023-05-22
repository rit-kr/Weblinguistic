import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Website from './components/Website';
import Localization from './components/Localization';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="website" element={<Website />} />
        <Route path="localization" element={<Localization />} />
        <Route path="portfolio" element={<Portfolio />} />

      </Routes>
    </>
  );
}

export default App;
