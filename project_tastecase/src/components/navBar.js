import '../components/Css/NavBar.css';
import useInView from './ui/AnimationHook.js'


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
        <nav >
          <ul className='Nav_items'>
            <li className='Nav_item'>
              <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
            </li>
            <li className='Nav_item'>
              <a href="#service" onClick={(e) => scrollToSection(e, 'service')}>Service</a>
            </li>
            <li className='Nav_item'>
              <a href="#process" onClick={(e) => scrollToSection(e, 'process')}>Process</a>
            </li>
            <li className='Nav_item'>
              <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')}>Pricing</a>
            </li>
            <li className='Nav_item'>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}


export default NavBar;