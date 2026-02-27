import './App.css';
  import Home from './pages/Home.js';
  import CTA from './pages/CTA.js';
  import AboutUs from './pages/AboutUs.js';
  import NotFound from './pages/NotFound.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (

       <BrowserRouter>

      {/* <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav> */}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Contact" element={<CTA />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
