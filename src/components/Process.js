import './Css/Process.css';
import FloatingLines from './ui/FloatingLine.js';
import Brush from '../assets/brush.svg';
import Code from '../assets/code-slash.svg';
import Rocket from '../assets/rocket-takeoff.svg';
import Search from '../assets/search.svg';

import useInView from './ui/AnimationHook.js'

import Threads from './ui/Threads.js';

function Process() {
 const [ref, visible] = useInView();
  return (
    <section id="process" className="Process">
      <div className="Porcess_wrapper">
		<div className='Proc_bg'>
			

  <Threads
    amplitude={1}
    distance={0}
    enableMouseInteraction={false}
  />

		</div>
        <div className="Process_cardWrapper">
			<div
			ref={ref}
  className={`Process_headlines ${visible ? "show" : ""}`}
			
			>
				<h3 className='Process_mini_title'>Our Process</h3>
				<h2 className='Process_title'>From Concept to Configured Bot</h2>
				<p className='Process_subtitle'>A streamlined process for delivering customized AI bots that meet your business needs.</p>
			</div>
			<div
			className={`ProcessCard_wrapper ${visible ? "show" : ""}`}
			
		>
				<div className='ProcessCards'>
					<img src={Search}  className='ProcessCard_IMG' alt="ProcessCard_IMG"></img>
					<h4 className='ProcessCard_title' >Consultation</h4>
					<p className='ProcessCard_para'>We discuss your business needs and identify the best AI bot solutions for automation.</p>
				</div>
				<div className='Divider'>
					<span className='dot'></span>
				</div>
				<div className='ProcessCards'>
					<img src={Brush} className='ProcessCard_IMG' alt="ProcessCard_IMG"></img>
					<h4 className='ProcessCard_title' >Configuration</h4>
					<p className='ProcessCard_para'>Our experts configure the AI bot with your specific requirements and data.</p>
				</div>
				<div className='Divider'>
					<span className='dot'></span>
				</div>
				<div className='ProcessCards'>
					<img src={Code} className='ProcessCard_IMG' alt="ProcessCard_IMG"></img>
					<h4 className='ProcessCard_title' >Testing</h4>
					<p className='ProcessCard_para'>Rigorous testing to ensure the bot performs accurately and integrates seamlessly.</p>
				</div>
				<div className='Divider'>
					<span className='dot'></span>
				</div>
				<div className='ProcessCards'>
					<img src={Rocket} className='ProcessCard_IMG' alt="ProcessCard_IMG"></img>
					<h4 className='ProcessCard_title' >Delivery</h4>
					<p className='ProcessCard_para'>Handover of the configured bot with training and ongoing support.</p>
				</div>
			</div>
        </div>
      </div>
    </section>
  );
}

export default Process;