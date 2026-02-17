import '../components/Css/NavBar.css';
import useInView from './ui/AnimationHook.js'
import MainLogo from "../assets/WhatsApp_Image_2026-02-03_at_06.37.15-removebg-preview.png"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function NavBar() {

  const [ref, visible] = useInView();

  
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`No element found with id: ${id}`);
    }
  };

  return (
    <div className="NavBar">
      <div  
       ref={ref}
  className={`Nav_wrapper ${visible ? "show" : ""}`}
                 
      
      >
        <nav className='Nav_wrap' >
 <li onClick={(e) => scrollToSection(e, 'home')}  className='Nav_item'>
      <Link to="/">  
               <img  src={MainLogo} alt='MainLogo' className='Logo'></img>
        </Link>
            </li>
          <ul className='Nav_items'>
        
            <li onClick={(e) => scrollToSection(e, 'service')} className='Nav_item'>
              <Link to="/">
              Service
              </Link>
            </li>


            <li onClick={(e) => scrollToSection(e, 'process')} className='Nav_item'>
              <Link to= "/">
                Procese
              </Link>
            </li>
            <li  onClick={(e) => scrollToSection(e, 'pricing')}  className='Nav_item'>
              <Link   to="/">
                  <a >Pricing</a>
              </Link>
            </li>

            <li className='Nav_item'>
                <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}


export default NavBar;