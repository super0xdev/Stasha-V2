import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Ecosystem from './pages/Ecosystem';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';
import About from './pages/About';
import Ambadassor from './pages/Ambadassor';

function App() {
  return (
    <div className="flex justify-center w-full whole overflow-hidden">
      <div className="App text-white">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Ambadassor />} />
            <Route path='/ecosystem' element={<Ecosystem />} />
            <Route path='/policy' element={<PrivacyPolicy />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
