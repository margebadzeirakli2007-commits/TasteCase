import "../components/Css/Pricing.css";
import Hyperspeed from '../components/ui/Hyperspeed.js';
import Chack from "../assets/check-circle-fill.svg"
import useInView from './ui/AnimationHook.js'
import { Link } from 'react-router-dom';

function Pricing() {

const [ref, visible] = useInView();
const [cardsRef, cardsVisible] = useInView();

	return (
		<section  className="Pricing">
<div
ref={ref}
//   className={`Pricing_BG ${visible ? "show" : ""}`}
  
  className="Pricing_BG show"

>
			<Hyperspeed />
	</div>		
	
		<div className="Pricing_content">
				<div 
				ref={ref}
  className={`Pricing_headlines ${visible ? "show" : ""}`}
				
			>
					<h2 className="Pricing_HeadlineMiniText">Bot Packages</h2>
					<h2 className="Pricing_HeadlineTitle">Choose Your AI Bot Solution</h2>
					<p id="pricing" className="Pricing_headlinePara">Transparent pricing for pre-configured AI bots. Every package includes customization and support.</p>
			    </div>
				<div 
				ref={cardsRef}
				className={`Pricing_CardsWrapper ${cardsVisible ? "show" : ""}`}
				>
					<div className="Pricing_card">
						<h3 className="Card_title">Starter Bot</h3>
						<p className="card_Text">Perfect for small businesses looking to automate basic tasks.</p>
						<p className="Pricing_start">starting at</p>
						<div className="Price_wrap">
							<h4 className="Dolar">$</h4>
							<h3 className="Price">5K</h3>
						</div>
						<div className="PricicingCards_benefitsWrapper">
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">Pre-configured AI bot</p>
							</div>
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">Basic customization</p>
							</div>
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">Email support</p>
							</div>
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">Setup and training</p>
							</div>
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">Documentation</p>
							</div>
						</div>
						<div className="btu_wrapper">
        <Link to="/contact">

							<button className="BTNs">
								Get Started
							</button>    </Link>

						</div>
					</div>
					<div className="Pricing_card">
						<h3 className="Card_title">Enterprise Bot Suite</h3>
						<p className="card_Text">Comprehensive AI bot solutions for large-scale operations.</p>
						<p className="Pricing_start">starting at</p>
						<div className="Price_wrap">
							<h4 className="Dolar">$</h4>
							<h3 className="Price">50K</h3>
						</div>
						<div className="PricicingCards_benefitsWrapper">
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">Multiple specialized bots</p>
							</div>
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">Full customization</p>
							</div>
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">Integration with existing systems</p>
							</div>
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">24/7 priority support</p>
							</div>
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">Dedicated account manager</p>
							</div>
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">Ongoing maintenance & updates</p>
							</div>
						</div>
						<div className="btu_wrapper">
        <Link to="/contact">

							<button className="BTNs">
								Schedule Call
							</button>    </Link>

						</div>
					</div>
					<div className="Pricing_card">
						<h3 className="Card_title">Nexus</h3>
						<p className="card_Text">Comprehensive AI transformation for established businesses.</p>
						<p className="Pricing_start">starting at</p>
						<div className="Price_wrap">
							<h4 className="Dolar">$</h4>
							<h3 className="Price">Custom</h3>
						</div>
						<div className="PricicingCards_benefitsWrapper">
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">Unlimited AI initiatives</p>
							</div>
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">Research & development access</p>
							</div>
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">White-label solutions</p>
							</div>
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">On-site team integration</p>
							</div>
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">Board-level advisory</p>
							</div>
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">Equity partnership options</p>
							</div>
						</div>
						<div className="btu_wrapper">

							        <Link to="/contact">
<button className="BTNs">
								Contact us
							</button>    </Link>
							
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Pricing;
