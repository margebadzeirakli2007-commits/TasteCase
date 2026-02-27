import '../components/Css/NavBar.css';
import useInView from './ui/AnimationHook.js'
import MainLogo from "../assets/WhatsApp_Image_2026-02-03_at_06.37.15-removebg-preview.png"
import { Link } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {

  const [ref, visible] = useInView();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`No element found with id: ${id}`);
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="NavBar">
      <div
       ref={ref}
       className={`Nav_wrapper ${visible ? "show" : ""}`}
      >
        <nav className='Nav_wrap' >
          <li onClick={(e) => scrollToSection(e, 'home')}  className='Nav_item logo-item'>
            <Link to="/">
              <img  src={MainLogo} alt='MainLogo' className='Logo'></img>
            </Link>
          </li>

          {/* Desktop Navigation */}
          <ul className='Nav_items desktop-nav'>
            <li onClick={(e) => scrollToSection(e, 'service')} className='Nav_item'>
              <Link to="/">
                Service
              </Link>
            </li>
            <li onClick={(e) => scrollToSection(e, 'process')} className='Nav_item'>
              <Link to="/">
                Process
              </Link>
            </li>
            <li onClick={(e) => scrollToSection(e, 'pricing')} className='Nav_item'>
              <Link to="/">
                Pricing
              </Link>
            </li>
            <li className='Nav_item'>
              <Link to="/About">About</Link>
            </li>
            <li className='Nav_item'>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className='Nav_items mobile-nav-items'>
            <li onClick={(e) => scrollToSection(e, 'service')} className='Nav_item'>
              <Link to="/">
                Service
              </Link>
            </li>
            <li onClick={(e) => scrollToSection(e, 'process')} className='Nav_item'>
              <Link to="/">
                Process
              </Link>
            </li>
            <li onClick={(e) => scrollToSection(e, 'pricing')} className='Nav_item'>
              <Link to="/">
                Pricing
              </Link>
            </li>
            <li className='Nav_item'>
              <Link to="/About">About</Link>
            </li>
            <li className='Nav_item'>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;