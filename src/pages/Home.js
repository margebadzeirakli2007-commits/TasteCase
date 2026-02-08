import Hero from '../components/Hero.js';
import NavBar from '../components/navBar.js'; 
import Services from '../components/Services.js';
import Process from '../components/Process.js'; 
import Pricing from '../components/Pricing.js';
import Footer from '../components/Footer.js';
import CTA from "../components/CTA.js"
function Home() {
  return (
    <div className="App">

     <NavBar />
     <Hero />
     <Services/>
     <Process/>
     <Pricing/>
     <CTA/>
     <Footer/>
    </div>
  );
}

export default Home;
