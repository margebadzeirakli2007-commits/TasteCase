import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";

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
		<section id="contact" className="CTA">
			<div className="Contact_Bg"></div>
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
          placeholder="email@gmail.com"
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
        <button className="button" type="submit">
          Send Message
        </button>          
            </div>
          </form>
                {showToast && <div className="toast">Message sent successfully 🚀</div>}

        </div>
				</div>
		</section>
	);
}

export default CTA;
