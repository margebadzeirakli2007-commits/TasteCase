import Orb from './HeroOrb.js';
import './Css/hero.css';
import TextType from './ui/TextType.js';
import useInView from './ui/AnimationHook.js'


function Hero() {
      const [ref, visible] = useInView();
  return (
    <div id="home" className="Hero">   
      <div 
        className={`orb ${visible ? "show" : ""}`}

      style={{ width: '100%', height: '100vh', position: 'relative' }}>
  <Orb 
    hoverIntensity={4}
    rotateOnHover={true}
    hue={280}
    forceHoverState={false}
    backgroundColor="#000000"
/>
</div >
    <div className="Hero-bottom">
<TextType className='Hero_Header'
  text={["Architecting the Intelligence of Tomorrow", "We build bespoke AI ecosystems ", "Lightning-fast algorithms to automate your business evolution."]}
  typingSpeed={55}
  pauseDuration={2500}
  showCursor
  cursorCharacter="_"
  texts={["Welcome to AXSSEL! Good to see you!"]}
  deletingSpeed={50}
  variableSpeedEnabled={false}
  variableSpeedMin={60}
  variableSpeedMax={120}
  cursorBlinkDuration={0.5}
/>
<p  
ref={ref}
  className={`Para ${visible ? "show" : ""}`}

>We build bespoke AI ecosystems and lightning-fast algorithms to automate your business evolution.</p>
  <div 
  ref={ref}
  className={`Hero-bottom-buttons ${visible ? "show" : ""}`}
  
  >
    <button className="Hero-button">Book a discovery call</button>
    <button className="Hero-button Hero-button-secondary">View our work</button>
  </div>

     </div>


    </div>
  );
}
export default Hero;
