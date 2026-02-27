import React from 'react';
import "../components/Css/Services.css"
import MagicBento from './ui/Cards.js'
import useInView from './ui/AnimationHook.js'





function Services() { 
    const [ref, visible] = useInView();
    const [activeIndex, setActiveIndex] = React.useState(null);

    const cards = [
      {
        title: 'Customer Service Bot',
        short: 'Enhance your customer support with AI-powered responses.',
        long: 'Our Customer Service Bot handles queries 24/7, integrates with your CRM, learns from past interactions, and can be customized with voice, chat, or email support. Deploy it in days and watch satisfaction scores climb.',
      },
      {
        title: 'Operational Automation Bot',
        short: 'Automate repetitive tasks and workflows.',
        long: 'The Operational Automation Bot connects to your back-office systems, triggers actions based on events, and reduces manual workload by up to 70%. It adapts to complex business rules and scales with your operations.',
      },
      {
        title: 'Sales Bot',
        short: 'Drive conversions with personalized engagement.',
        long: 'Our Sales Bot qualifies leads, recommends products, and can even close simple deals via chat. It integrates with your e-commerce platform and CRM, giving reps more time to focus on high-value opportunities.',
      },
      {
        title: 'Custom AI Bot',
        short: 'Tailored bots for any niche need. ',
        long: 'Whether it’s marketing automation, data analysis, or a specialized internal tool, we build bots from the ground up to match your exact requirements. Unlimited possibilities with expert support.',
      },
      {
        title: 'AI Bot Consulting',
        short: 'Expert guidance on bot strategy.',
        long: 'Our consulting service assesses your processes, recommends the right bot architecture, and helps you implement and optimize deployments. We also provide training and documentation.',
      },
      {
        title: 'Bot Maintenance & Support',
        short: 'Keep your bots reliable and up-to-date.',
        long: 'From security patches to feature updates and performance monitoring, we offer ongoing support plans to ensure your bots run smoothly and evolve with your business.',
      },
    ];

    return (
        <section >
            <div  className="Services">
                 <div 
                 ref={ref}
  className={`Service_wrapper ${visible ? "show" : ""}`}
                 id="service"
                 >
                <div  className="Service-header">
                    <p>Our Solutions</p>
                    <h2>AI Bots Configured for Your Business</h2>
                    <p  >We specialize in configuring powerful AI bots tailored to your specific needs, from customer service to operational automation, and selling them to enhance your efficiency.</p>
                </div>
           </div>
<div className="ServiceCard">
  <div className="ServiceCards_wrapper grid-auto-fit">

    {cards.map((c,i)=>(
      <div key={i} className="card" onClick={()=>setActiveIndex(i)}>
        <h1>{c.title}</h1>
        <p>{c.short}</p>
      </div>
    ))}

  </div>
</div>
            </div>

            {activeIndex !== null && (
              <div className="card-overlay" onClick={()=>setActiveIndex(null)}>
                <div className="card expanded" onClick={e=>e.stopPropagation()}>
                  <h1>{cards[activeIndex].title}</h1>
                  <p>{cards[activeIndex].long}</p>
                </div>
              </div>
            )}
        </section>
    )
}
export default Services;