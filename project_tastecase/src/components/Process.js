import { useState } from 'react';
import './Css/Process.css';
import FloatingLines from './ui/FloatingLine.js';
import Brush from '../assets/brush.svg';
import Code from '../assets/code-slash.svg';
import Rocket from '../assets/rocket-takeoff.svg';
import Search from '../assets/search.svg';

import useInView from './ui/AnimationHook.js'



function Process() {
 const [ref, visible] = useInView();
  return (
    <section id="process" className="Process">
      <div className="Porcess_wrapper">
        <div className="Process_Bg">
          <div
		
		  style={{ width: '100%', height: '100vh', position: 'relative' }}>
            <FloatingLines
              enabledWaves={['top', 'middle', 'bottom']}
              lineCount={2}
              lineDistance={1}
              bendRadius={0.1}
              bendStrength={-0.5}
              interactive={false}
              parallax={false}
            />
          </div>
        </div>
        <div className="Process_cardWrapper">
			<div
			ref={ref}
  className={`Process_headlines ${visible ? "show" : ""}`}
			
			>
				<h3 className='Process_mini_title'>Our Process</h3>
				<h2 className='Process_title'>From Vision to Reality</h2>
				<p className='Process_subtitle'>A proven methodology refined through hundreds of successful AI implementations.</p>
			</div>
			<div
			className={`ProcessCard_wrapper ${visible ? "show" : ""}`}
			
		>
				<div className='ProcessCards'>
					<img src={Search}  className='ProcessCard_IMG' alt="ProcessCard_IMG"></img>
					<h4 className='ProcessCard_title' >Discovery</h4>
					<p className='ProcessCard_para'>Deep-dive into your business processes, data infrastructure, and strategic objectives.</p>
				</div>
				<div className='Divider'>
					<span className='dot'></span>
				</div>
				<div className='ProcessCards'>
					<img src={Brush} className='ProcessCard_IMG' alt="ProcessCard_IMG"></img>
					<h4 className='ProcessCard_title' >Architecture</h4>
					<p className='ProcessCard_para'>Design bespoke AI systems tailored to your unique requirements and scalability needs.</p>
				</div>
				<div className='Divider'>
					<span className='dot'></span>
				</div>
				<div className='ProcessCards'>
					<img src={Code} className='ProcessCard_IMG' alt="ProcessCard_IMG"></img>
					<h4 className='ProcessCard_title' >Development</h4>
					<p className='ProcessCard_para'>Agile implementation with continuous feedback loops and transparent progress tracking.</p>
				</div>
				<div className='Divider'>
					<span className='dot'></span>
				</div>
				<div className='ProcessCards'>
					<img src={Rocket} className='ProcessCard_IMG' alt="ProcessCard_IMG"></img>
					<h4 className='ProcessCard_title' >Deployment</h4>
					<p className='ProcessCard_para'>Seamless integration with your existing stack, complete with monitoring and optimization.</p>
				</div>
			</div>
        </div>
      </div>
    </section>
  );
}

export default Process;