import "../components/Css/Services.css"
import MagicBento from './ui/Cards.js'
import useInView from './ui/AnimationHook.js'






function Services() { 
    const [ref, visible] = useInView();

    return (
        <section
        
        
         >
            <div  className="Services">
                 <div 
                
                 ref={ref}
  className={`Service_wrapper ${visible ? "show" : ""}`}
                 id="service"
                 >
                <div  className="Service-header">
                    <p>Our Solutions</p>
                    <h2>AI Infrastructure,Reimagined</h2>
                    <p  >From custom language models to self-healing neural networks, we architect intelligent systems that scale with your ambition.</p>
                </div>
                <div className="MagicBento-centered">
                  <MagicBento
                    className="MagicBento"
                    textAutoHide={true}
                    enableStars
                    enableSpotlight
                    enableBorderGlow={true}
                    enableTilt={false}
                    enableMagnetism={true}
                    clickEffect
                    spotlightRadius={400}
                    particleCount={12}
                    glowColor="134, 70, 169"
                    disableAnimations={false}
                  />
              </div>
           </div>
            </div>
            <div className="Servise_BG">
             
            </div>
        </section>
    )
}
export default Services;