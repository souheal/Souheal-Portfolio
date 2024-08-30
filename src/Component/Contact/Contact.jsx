import React, { useState } from "react";
import "./Contact.css";
import photo from "../../Assests/theme_pattern.svg";
import mail_icon from "../../Assests/mail_icon.svg";
import call_icon from "../../Assests/call_icon.svg";
import location_icon from "../../Assests/location_icon.svg";

const Contact = () => {
  const [result, setResult] = useState(""); // Define useState at the top level of the component

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e77ccc87-b087-430b-a0db-d4f8cf5d5062");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
      
    });

    const data = await response.json();
    
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => {
        setResult("")
      }, 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);
      setTimeout( ()=>{
        setResult("")
      },5000)
    }
  };

  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={photo} alt="photo" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let’s talk</h1>
          <p>
            I’m currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="email icon" />
              <p>mheashsouheal619@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call icon" />
              <p>+963 0935535204</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location icon" />
              <p>Damascus, Syria</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" required />
          
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" required />
          
          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>
          <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>
      {result && <p className="result">{result}</p>} 
    </div>
  );
};

export default Contact;
