import "../components/Css/Pricing.css";
import Hyperspeed from '../components/ui/Hyperspeed.js';
import Chack from "../assets/check-circle-fill.svg"
import useInView from './ui/AnimationHook.js'

function Pricing() {

const [ref, visible] = useInView();

	return (
		<section  className="Pricing">
			<div style={{ width: '100%', height: '100vh' }} className="PricingBG">
<Hyperspeed
  effectOptions={{"distortion":"turbulentDistortion","length":400,"roadWidth":10,"islandWidth":2,"lanesPerRoad":3,"fov":90,"fovSpeedUp":150,"speedUp":2,"carLightsFade":0.4,"totalSideLightSticks":20,"lightPairsPerRoadWay":40,"shoulderLinesWidthPercentage":0.05,"brokenLinesWidthPercentage":0.1,"brokenLinesLengthPercentage":0.5,"lightStickWidth":[0.12,0.5],"lightStickHeight":[1.3,1.7],"movingAwaySpeed":[60,80],"movingCloserSpeed":[-120,-160],"carLightsLength":[12,80],"carLightsRadius":[0.05,0.14],"carWidthPercentage":[0.3,0.5],"carShiftX":[-0.8,0.8],"carFloorSeparation":[0,5],"colors":{"roadColor":526344,"islandColor":657930,"background":0,"shoulderLines":1250072,"brokenLines":1250072,"leftCars":[14177983,6770850,12732332],"rightCars":[242627,941733,3294549],"sticks":242627}}}
/>
			</div>
			<div className="Pricing_content">
				<div 
				ref={ref}
  className={`Pricing_headlines ${visible ? "show" : ""}`}
				
			>
					<h2 className="Pricing_HeadlineMiniText">Investment Tiers</h2>
					<h2 className="Pricing_HeadlineTitle">Scale Your Intelligence</h2>
					<p id="pricing" className="Pricing_headlinePara">Transparent pricing for transformative AI solutions. Every partnership begins with a discovery call.</p>
			    </div>
				<div  className="Pricing_CardsWrapper">
					<div className="Pricing_card">
						<h3 className="Card_title">Catalyst</h3>
						<p className="card_Text">For startups ready to integrate AI into their core operations.</p>
						<p className="Pricing_start">starting at</p>
						<div className="Price_wrap">
							<h4 className="Dolar">$</h4>
							<h3 className="Price">25K</h3>
						</div>
						<div className="PricicingCards_benefitsWrapper">
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">Single AI model development</p>
							</div>
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">3-month implementation</p>
							</div>
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">Email support</p>
							</div>
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">Basic infrastructure setup</p>
							</div>
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">Documentation & training</p>
							</div>
						</div>
						<div className="btu_wrapper">
							<button className="BTNs">
								Get Started
							</button>
						</div>
					</div>
					<div className="Pricing_card">
						<h3 className="Card_title">Enterprise</h3>
						<p className="card_Text">Comprehensive AI transformation for established businesses.</p>
						<p className="Pricing_start">starting at</p>
						<div className="Price_wrap">
							<h4 className="Dolar">$</h4>
							<h3 className="Price">75K</h3>
						</div>
						<div className="PricicingCards_benefitsWrapper">
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">Multi-model AI ecosystem</p>
							</div>
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">Custom algorithm development</p>
							</div>
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">Full infrastructure architecture</p>
							</div>
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">24/7 priority support</p>
							</div>
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">Dedicated success manager</p>
							</div>
							<div className="benefit">
								<img className="ChackImg" src={Chack} alt="Chack" ></img>
								<p className="Benefit_text">Quarterly optimization reviews</p>
							</div>
						</div>
						<div className="btu_wrapper">
							<button className="BTNs">
								Schedule Call
							</button>
						</div>
					</div>
					<div className="Pricing_card">
						<h3 className="Card_title">Nexus</h3>
						<p className="card_Text">Comprehensive AI transformation for established businesses.</p>
						<p className="Pricing_start">starting at</p>
						<div className="Price_wrap">
							<h4 className="Dolar"></h4>
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
							<button className="BTNs">
								Contact us
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Pricing;
