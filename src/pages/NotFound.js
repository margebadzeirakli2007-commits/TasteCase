import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/navBar.js';
import Footer from '../components/Footer.js';
import '../components/Css/NotFound.css'; // Assuming we'll create this

function NotFound() {
  return (
    <div className="App">
      <NavBar />
      <div className="not-found-container">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
          <p className="not-found-submessage">It seems like you've ventured into uncharted territory.</p>
          <Link to="/" className="not-found-button">Go Back Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
