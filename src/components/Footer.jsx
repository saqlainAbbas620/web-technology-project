import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram, FaFacebook, FaTwitter, FaYelp } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Restaurant Info */}
            <div className="footer-column">
              <div className="footer-logo">
                <h3>La Cucina di Pregio</h3>
                <p className="footer-tagline">Where Luxury Meets Authentic Italian Cuisine</p>
              </div>
              <p className="footer-description">
                Experience the art of Neapolitan pizza crafted with passion and 
                the finest ingredients since 1985.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="Facebook"><FaFacebook /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="Yelp"><FaYelp /></a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="footer-column">
              <h4>Contact Us</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <FaMapMarkerAlt />
                  <div>
                    <p>123 Gourmet Avenue</p>
                    <p>Culinary District, NY 10001</p>
                  </div>
                </div>
                <div className="contact-item">
                  <FaPhone />
                  <div>
                    <p>+1 (555) 123-4567</p>
                    <p className="contact-label">Reservations</p>
                  </div>
                </div>
                <div className="contact-item">
                  <FaEnvelope />
                  <div>
                    <p>info@lacucinadipregio.com</p>
                    <p className="contact-label">General Inquiries</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="footer-column">
              <h4>Hours of Operation</h4>
              <div className="hours-info">
                <div className="hours-item">
                  <span>Monday - Thursday</span>
                  <span>11:00 AM - 10:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Friday - Saturday</span>
                  <span>11:00 AM - 11:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Sunday</span>
                  <span>12:00 PM - 9:00 PM</span>
                </div>
                <div className="hours-note">
                  <FaClock />
                  <span>Last seating 30 minutes before closing</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/menu">View Our Menu</Link></li>
                <li><Link to="/reservation">Make a Reservation</Link></li>
                <li><Link to="/about">Our Story</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/">Private Events</Link></li>
                <li><Link to="/">Careers</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} La Cucina di Pregio. All rights reserved.</p>
            <div className="footer-legal">
              <Link to="/privacy">Privacy Policy</Link>
              <span>•</span>
              <Link to="/terms">Terms of Service</Link>
              <span>•</span>
              <Link to="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;