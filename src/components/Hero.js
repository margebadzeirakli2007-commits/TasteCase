import Orb from './HeroOrb.js';
import './Css/hero.css';
import TextType from './ui/TextType.js';
import useInView from './ui/AnimationHook.js'
import { Link } from 'react-router-dom';


function Hero() {
      const [ref, visible] = useInView();
      const [headerRef, headerVisible] = useInView();
  return (
    <div id="home" className="Hero">   
      <div 
        className={`orb ${visible ? "show" : ""}`}

      style={{ width: '100%', height: '100vh', position: 'relative' }}>
  <Orb 
    hoverIntensity={5}
    rotateOnHover={true}
    hue={270}
    forceHoverState={false}
    backgroundColor="#000000"
/>
</div >
    <div className="Hero-bottom">
<div 
ref={headerRef}
className={`Hero_Header ${headerVisible ? "show" : ""}`}
>
<TextType 
  text={["Empowering Businesses with AI Bots", "We configure and sell custom AI bots to automate your operations.", "Transform your business with intelligent automation."]}
  typingSpeed={55}
  pauseDuration={2500}
  showCursor
  cursorCharacter="_"
  texts={["Welcome to AXSSEL! Ready to automate?"]}
  deletingSpeed={50}
  variableSpeedEnabled={false}
  variableSpeedMin={60}
  variableSpeedMax={120}
  cursorBlinkDuration={0.5}
/>
</div>
<p  
ref={ref}
  className={`Para ${visible ? "show" : ""}`}

>At AXSSEL, we specialize in configuring advanced AI bots tailored to your business needs and selling them to drive automation and efficiency.</p>
  <div 
  ref={ref}
  className={`Hero-bottom-buttons ${visible ? "show" : ""}`}
  
  >
    <Link to="/contact">
        <button className="Hero-button">Book a Demo</button>
    </Link>
        <Link to="/contact">
    <button className="Hero-button Hero-button-secondary">Explore Our Bots</button>
    </Link>
  </div>

     </div>


    </div>
  );
}
export default Hero;
