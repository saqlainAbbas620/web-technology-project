import React, { useState } from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import { FaArrowRight, FaStar, FaLeaf, FaFire, FaClock, FaHeart, FaUtensils, FaHistory, FaCalendarAlt, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { MenuList } from "../MenuData/MenuList";
import "../styles/Home.css";

function Home() {
  // Select 3 featured dishes from MenuList
  const featuredDishes = [
    MenuList.find(item => item.name.includes("Signature")),
    MenuList.find(item => item.name.includes("Truffle")),
    MenuList.find(item => item.name.includes("Diamante"))
  ].filter(Boolean); // Remove any undefined items

  const [hoveredDish, setHoveredDish] = useState(null);

  return (
    <div className="home">
      {/* Hero Section with Video Background Effect */}
      <div className="heroSection">
        <div 
          className="heroBackground"
          style={{ backgroundImage: `url(${BannerImage})` }}
        />
        
        <div className="heroContent">
          {/* Animated Particles */}
          <div className="particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
              }} />
            ))}
          </div>

          {/* Floating Badges */}
          <div className="floatingBadges">
            <div className="floatingBadge">
              <FaStar />
              <span>MICHELIN GUIDE</span>
            </div>
            <div className="floatingBadge">
              <FaLeaf />
              <span>ORGANIC</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="mainContent">
            <div className="welcomeNote">
              <div className="handwritten">Welcome to</div>
              <h1 className="mainTitle">
                <span className="goldText">La Cucina</span>
                <span className="whiteText">di Pregio</span>
              </h1>
              <div className="tagline">
                <span className="line"></span>
                <span className="text">WHERE LUXURY MEETS FLAVOR</span>
                <span className="line"></span>
              </div>
              <p className="description">
                Experience the art of Neapolitan pizza elevated to perfection. 
                Each creation is a symphony of 72-hour fermented dough, 
                imported Italian ingredients, and masterful wood-fired craftsmanship.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="actionButtons">
              <Link to="/reservation" className="btnPrimary">
                <FaCalendarAlt />
                <span>RESERVE TABLE</span>
                <div className="btnHoverEffect"></div>
              </Link>
              <Link to="/menu" className="btnSecondary">
                <FaUtensils />
                <span>EXPLORE MENU</span>
              </Link>
              <Link to="/about" className="btnTertiary">
                <FaHistory />
                <span>OUR STORY</span>
              </Link>
            </div>

            {/* Social Links */}
            <div className="socialLinks">
              <a href="#" className="socialLink"><FaInstagram /></a>
              <a href="#" className="socialLink"><FaFacebook /></a>
              <a href="#" className="socialLink"><FaTwitter /></a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="scrollIndicator">
            <span>SCROLL TO DISCOVER</span>
            <div className="scrollArrow"></div>
          </div>
        </div>
      </div>

      {/* Featured Dishes Section */}
      <div className="featuredDishes">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Chef's Selection</h2>
            <p className="sectionSubtitle">EXQUISITE CREATIONS THAT DEFINE OUR CRAFT</p>
            <div className="titleDivider"></div>
          </div>

          <div className="dishesGrid">
            {featuredDishes.map((dish, index) => (
              <div 
                key={index}
                className={`dishCard ${hoveredDish === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredDish(index)}
                onMouseLeave={() => setHoveredDish(null)}
              >
                <div className="dishImage" style={{ backgroundImage: `url(${dish.image})` }}>
                  <div className="dishOverlay">
                    <div className="dishBadges">
                      {dish.isSignature && (
                        <span className="badge signature">
                          <FaStar /> SIGNATURE
                        </span>
                      )}
                      {dish.isLuxury && (
                        <span className="badge luxury">
                          <FaStar /> LUXURY
                        </span>
                      )}
                    </div>
                    <button className="quickViewBtn">VIEW DETAILS</button>
                  </div>
                </div>
                
                <div className="dishContent">
                  <div className="dishHeader">
                    <h3>{dish.name}</h3>
                    <div className="dishPrice">${dish.price.toFixed(2)}</div>
                  </div>
                  <p className="dishDescription">{dish.description}</p>
                  
                  <div className="dishMeta">
                    <span className="metaItem">
                      <FaClock /> {dish.cookTime}
                    </span>
                    <span className="metaItem">
                      <FaStar /> {dish.rating}/5
                    </span>
                  </div>
                  
                  <div className="dishActions">
                    <button className="orderBtn">
                      <FaUtensils /> ORDER NOW
                    </button>
                    <button className="wishlistBtn">
                      <FaHeart />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="experienceSection">
        <div className="experienceContent">
          <div className="experienceText">
            <h2>An Unforgettable Dining Experience</h2>
            <p>
              Step into our world where every detail is meticulously crafted. 
              From the hand-selected ingredients to the ambient lighting, 
              we create moments that linger in memory.
            </p>
            <div className="experienceFeatures">
              <div className="featureItem">
                <FaFire />
                <h4>Wood-Fired Perfection</h4>
                <p>900°F brick oven for authentic flavor</p>
              </div>
              <div className="featureItem">
                <FaLeaf />
                <h4>Farm to Table</h4>
                <p>Daily sourced organic ingredients</p>
              </div>
              <div className="featureItem">
                <FaClock />
                <h4>72-Hour Fermentation</h4>
                <p>For the perfect crust texture</p>
              </div>
            </div>
          </div>
          
          <div className="experienceImage">
            <div className="imageFrame">
              <div className="frameBorder"></div>
              <div className="imageContent">
                {/* This would be an image of your restaurant interior */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="ctaSection">
        <div className="ctaBackground"></div>
        <div className="ctaContent">
          <h2>Ready for an Extraordinary Experience?</h2>
          <p>
            Join us for an evening of culinary excellence. 
            Limited seating available for an intimate dining experience.
          </p>
          <div className="ctaButtons">
            <Link to="/reservation" className="ctaBtnPrimary">
              <FaCalendarAlt />
              <span>RESERVE NOW</span>
              <div className="btnGlow"></div>
            </Link>
            <Link to="/contact" className="ctaBtnSecondary">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;