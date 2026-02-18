import emailjs from "emailjs-com";
import { useState } from "react";
import NavBar from "../components/navBar";
import ColorBends from '../components/ui/ColorBends.js';
import "../components/Css/Contact.css"

function CTA() {

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    let newErrors = {};

    ["first_name", "last_name", "email", "subject", "message"].forEach(
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
		<section  className="CTA">
      <div className="CTA_bg">
          
<ColorBends
  colors={["#d085f5", "#9c33e5", "#6c3970"]}
  rotation={0}
  speed={0.1}
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

      </div>
      <NavBar/>
			<div className="Contact_Maincontent">
				<div className="Contact Headlines">
					<h2 className="Contact_mainTitle">
						Lets have a Chat
					</h2>
					<p className="Contact_headlinePara">
						Question about our product, orders , or just want to say hello? We're here to help
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
                         Subject
                    </label>
   <input
          name="subject"
          className={`Inputs ${errors.subject ? "error" : ""}`}
          placeholder="Subject"
        />                </div>
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
		</section>
	);
}

export default CTA;
