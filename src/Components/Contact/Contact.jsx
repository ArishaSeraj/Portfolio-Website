import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import spaceship_icon from "../Assets/Spaceship.png";
import planet_icon from "../Assets/Main_img.png";

const Contact = () => {
  const [isTakingOff, setIsTakingOff] = useState(false);
  const [showExplosion, setShowExplosion] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowExplosion(true); 
    setIsTakingOff(true); 

    emailjs
      .send(
        "service_x63suxb", 
        "template_nre4eu6", 
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
        },
        "GqLJlCqCPv6eGsqrh"
      )
      .then(
        () => {
          alert("Your message has been sent!");
          setShowExplosion(false);
          setIsTakingOff(false);
          setFormData({ firstName: "", lastName: "", email: "", message: "" }); 
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send the message. Please try again.");
          setShowExplosion(false);
          setIsTakingOff(false);
        }
      );
  };

  return (
    <div className="contact-container">
      {showExplosion && <div className="ripple-explosion"></div>}
      <div className="planet-main">
        <img src={planet_icon} alt="Planet" />
      </div>
      <div className={`form-container ${isTakingOff ? "taking-off" : ""}`}>
        <form onSubmit={handleSubmit} className="contact-form">
          <h2>Contact Me</h2>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="spaceship">
        <img src={spaceship_icon} alt="Spaceship" />
      </div>
    </div>
  );
};

export default Contact;
