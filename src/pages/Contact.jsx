import React, { useState } from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      alert("Message sent successfully! We'll contact you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    { icon: <FaPhone />, title: "Phone", info: "+1 (555) 123-4567", desc: "Mon-Sun: 10AM-10PM" },
    { icon: <FaEnvelope />, title: "Email", info: "info@lacucina.com", desc: "Response within 24h" },
    { icon: <FaMapMarkerAlt />, title: "Location", info: "123 Gourmet Ave", desc: "New York, NY 10001" },
    { icon: <FaClock />, title: "Hours", info: "Open Daily", desc: "11:00 AM - 11:00 PM" },
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <div 
        className="contactHero"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${PizzaLeft})` }}
        aria-label="Contact us background"
      >
        <div className="heroOverlay">
          <div className="heroContent">
            <h1 className="heroTitle">Get in Touch</h1>
            <p className="heroSubtitle">We'd love to hear from you</p>
            <div className="heroDivider"></div>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="contactMain">
        <div className="container">
          <div className="contactGrid">
            {/* Contact Information */}
            <div className="contactInfoSection">
              <div className="sectionHeader">
                <h2 className="sectionTitle">Contact Information</h2>
                <p className="sectionDescription">
                  Reach out to us through any of these channels. We're always here to serve you.
                </p>
              </div>

              <div className="contactDetails">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contactDetailCard">
                    <div className="contactIcon">{item.icon}</div>
                    <div className="contactDetailContent">
                      <h3>{item.title}</h3>
                      <p className="contactInfo">{item.info}</p>
                      <p className="contactDesc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="socialConnect">
                <h3>Follow Our Journey</h3>
                <div className="socialIcons">
                  {[
  { name: "Instagram", icon: FaInstagram, href: "#instagram" },
  { name: "Facebook", icon: FaFacebook, href: "#facebook" },
  { name: "Twitter", icon: FaTwitter, href: "#twitter" },
].map((social) => (
  <a key={social.name} href={social.href} className="socialLink">
    <social.icon /> 
    
  </a>
))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contactFormSection">
              <div className="formHeader">
                <h2 className="formTitle">Send Us a Message</h2>
                <p className="formSubtitle">Fill out the form below and we'll get back to you promptly</p>
              </div>

              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="formRow">
                  <div className="formGroup">
                    <label htmlFor="name">
                      <span className="labelText">Full Name</span>
                      <span className="required">*</span>
                    </label>
                    <input
                      name="name"
                      placeholder="John Smith"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="formInput"
                    />
                  </div>

                  <div className="formGroup">
                    <label htmlFor="email">
                      <span className="labelText">Email Address</span>
                      <span className="required">*</span>
                    </label>
                    <input
                      name="email"
                      placeholder="john@example.com"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="formInput"
                    />
                  </div>
                </div>

                <div className="formRow">
                  <div className="formGroup">
                    <label htmlFor="phone">
                      <span className="labelText">Phone Number</span>
                    </label>
                    <input
                      name="phone"
                      placeholder="(123) 456-7890"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="formInput"
                    />
                  </div>

                  <div className="formGroup">
                    <label htmlFor="subject">
                      <span className="labelText">Subject</span>
                      <span className="required">*</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="formSelect"
                    >
                      <option value="">Select a subject</option>
                      <option value="reservation">Reservation</option>
                      <option value="catering">Catering Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="formGroup">
                  <label htmlFor="message">
                    <span className="labelText">Your Message</span>
                    <span className="required">*</span>
                  </label>
                  <textarea
                    rows="6"
                    placeholder="Tell us how we can assist you..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="formTextarea"
                  ></textarea>
                </div>

                <div className="formActions">
                  <button 
                    type="submit" 
                    className="submitButton"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                  <p className="formNote">
                    By submitting, you agree to our privacy policy. We respect your data.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mapSection">
        <div className="mapPlaceholder">
          <div className="mapOverlay">
            <h3>Visit Our Restaurant</h3>
            <p>123 Gourmet Avenue, Culinary District</p>
            <p>New York, NY 10001</p>
            <button className="directionsButton">Get Directions</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;