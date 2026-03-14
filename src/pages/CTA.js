import emailjs from "emailjs-com";
import { useState } from "react";
import NavBar from "../components/navBar";
import ColorBends from '../components/ui/ColorBends.js';
import TextType from '../components/ui/TextType.js';
import Aurora from '../components/ui/Aurora.js';
import "../components/Css/Contact.css"
import Footer from "../components/Footer.js";
function CTA() {

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    let newErrors = {};

    ["first_name", "last_name", "email", "phone", "message"].forEach(
      (field) => {
        if (!formData.get(field)) {
          newErrors[field] = true;
        }
      }
    );

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    emailjs
      .sendForm(
        "service_eqldvqe",
        "template_nwwd2yl",
        form,
        "F-aXUONex0uE9IJP4"
      )
      .then(() => {
        form.reset();
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      })
      .catch(() => {
        alert("Failed to send message ❌");
      });
  };





	return (
		<section >
      <div className="CTA">
      <div className="CTA_bg">
          
<ColorBends
  colors={["#7c0d54", "#9c33e5", "#500b15"]}
  rotation={0}
  speed={0.3}
  scale={1.3}
  frequency={1}
  warpStrength={1}
  mouseInfluence={0.5}
  parallax={0.5}
  noise={0}
  transparent
  autoRotate={0.5}
  color=""
/>

<Aurora
  colorStops={["#d085f5", "#9c33e5", "#6c3970"]}
  speed={1}
  amplitude={0.5}
  blend={0.5}
/>

      </div>
      <NavBar/>
			<div className="Contact_Maincontent">
				<div className="Contact Headlines">
					<TextType
						text="Get Your Custom AI Bot"
						as="h2"
						className="Contact_mainTitle"
						typingSpeed={50}
						initialDelay={200}
						pauseDuration={1000}
						loop={false}
						showCursor={true}
						cursorCharacter="|"
						cursorBlinkDuration={0.3}
					/>
					<p className="Contact_headlinePara">
						Ready to automate your business? Contact us to discuss your AI bot needs and get a customized solution.
					</p>
				</div>
        <div className="Form_Wrapper">
          <form onSubmit={sendEmail} >
            <div className="information_aboutUser">
              <div className="first layer">
                <div className="Input_wrap">
                     <label className="InputHeader">
                         First Name
                    </label>
  <input
          name="first_name"
          className={`Inputs ${errors.first_name ? "error" : ""}`}
          placeholder="Johan"
        />                </div>
                <div className="Input_wrap">
                     <label className="InputHeader">
                         Last Name
                    </label>
 <input
          name="last_name"
          className={`Inputs ${errors.last_name ? "error" : ""}`}
          placeholder="Jameson"
        />                </div>
              </div>
              <div className="Second layer">
                <div className="Input_wrap">
                     <label className="InputHeader">
                         Email
                    </label>
  <input
          type="email"
          name="email"
          className={`Inputs ${errors.email ? "error" : ""}`}
          placeholder="Johan.jameson@gmail.com"
        />
                </div>
                <div className="Input_wrap">
                     <label className="InputHeader">
                         Phone Number
                    </label>
  <input
          type="tel"
          name="phone"
          className={`Inputs ${errors.phone ? "error" : ""}`}
          placeholder="+995 555 123 456"
        />
                </div>
              </div>
              <div className="Third layer">

              </div>
              <div className="Massage_box">
                <label className="InputHeader">
                         Massage
                    </label>
        <textarea
          name="message"
          className={`massage_input ${errors.message ? "error" : ""}`}
          placeholder="Hi, I have a question..."
        />
              </div>
        <button  className={`button ${showToast? "red" : ""}`} type="submit">
          Send Message
        </button>          
            </div>
          </form>
        </div>
				</div>



      </div>
        <Footer/>
		</section>
	);
}

export default CTA;
