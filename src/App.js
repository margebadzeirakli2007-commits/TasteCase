import './App.css';
  import Home from './pages/Home.js';
  import CTA from './pages/CTA.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



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
        <Route path="/Contact" element={<CTA />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
