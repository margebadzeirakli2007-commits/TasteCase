import NavBar from "../components/navBar";
import ColorBends from '../components/ui/ColorBends.js';
import TextType from '../components/ui/TextType.js';
import Aurora from '../components/ui/Aurora.js';
import "../components/Css/AboutUs.css"
import Footer from "../components/Footer.js";

function AboutUs() {
  return (
    <section>
      <div className="AboutUs">
        <div className="AboutUs_bg">
          <ColorBends
            colors={["#7c0d54", "#9c33e5", "#500b15"]}
            rotation={0}
            speed={0.5}
            scale={1.3}
            frequency={1}
            warpStrength={1}
            mouseInfluence={0.5}
            parallax={0.5}
            noise={0}
            transparent
            autoRotate={1}
            color=""
          />

          <Aurora
            colorStops={["#d085f5", "#9c33e5", "#6c3970"]}
            speed={1}
            amplitude={0.5}
            blend={0.5}
          />
        </div>
        <NavBar />
        <div className="AboutUs_Maincontent">
          <div className="AboutUs_headlines">
            <TextType
              text="About AXXSEL"
              as="h2"
              className="AboutUs_mainTitle"
              typingSpeed={50}
              initialDelay={200}
              pauseDuration={1000}
              loop={false}
              showCursor={true}
              cursorCharacter="|"
              cursorBlinkDuration={0.3}
            />
            <p className="AboutUs_headlinePara">
              At AXXSEL, we are passionate about transforming businesses through innovative AI solutions. Our team of experts specializes in creating custom AI bots that streamline operations, enhance customer experiences, and drive growth.
            </p>
          </div>
          <div className="AboutUs_content">
            <div className="mission">
              <h3>Our Mission</h3>
              <p>To empower businesses of all sizes with cutting-edge AI technology that is accessible, efficient, and tailored to their unique needs.</p>
            </div>
            <div className="vision">
              <h3>Our Vision</h3>
              <p>To be the leading provider of AI automation solutions, making advanced technology available to every business, everywhere.</p>
            </div>
            <div className="team">
              <h3>Our Team</h3>
              <p>Our diverse team brings together expertise in AI, machine learning, software development, and business strategy to deliver exceptional results.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default AboutUs;
