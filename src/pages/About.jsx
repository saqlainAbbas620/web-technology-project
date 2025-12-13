import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      {/* Hero Section */}
      <div 
        className="aboutHero"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${MultiplePizzas})` }}
        aria-label="Luxury pizza assortment"
      >
        <div className="heroContent">
          <h1 className="heroTitle">La Cucina di Pregio</h1>
          <p className="heroSubtitle">Where Tradition Meets Excellence</p>
        </div>
      </div>

      {/* About Content */}
      <div className="aboutContent">
        <div className="contentWrapper">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Our Legacy</h2>
            <div className="divider"></div>
            <p className="sectionSubtitle">EST. 1985 • THREE GENERATIONS OF CULINARY EXCELLENCE</p>
          </div>

          <div className="aboutText">
            <p className="leadParagraph">
              At <span className="highlight">La Cucina di Pregio</span>, we don't just make pizza—we craft culinary experiences. 
              For three generations, our family has dedicated itself to the art of authentic Italian pizza making.
            </p>
            
            <div className="textColumns">
              <p className="textColumn">
                Our journey began in the heart of Naples, where our founder, Giovanni, perfected the art of 
                wood-fired pizza. Today, we continue his legacy using only the finest ingredients: 
                San Marzano tomatoes, fresh buffalo mozzarella, and 00 flour imported directly from Italy.
              </p>
              
              <p className="textColumn">
                Each pizza is handcrafted by our master pizzaiolos, who have trained for years in the 
                traditional methods. Our dough is fermented for 72 hours, creating that perfect 
                combination of crispy crust and airy interior that has become our signature.
              </p>
            </div>

            {/* Features Grid */}
            <div className="featuresGrid">
              <div className="featureCard">
                <div className="featureIcon">🍅</div>
                <h3>Premium Ingredients</h3>
                <p>Locally sourced, organic produce and imported Italian specialties</p>
              </div>
              
              <div className="featureCard">
                <div className="featureIcon">🔥</div>
                <h3>Wood-Fired Ovens</h3>
                <p>Traditional brick ovens heated to 900°F for authentic flavor</p>
              </div>
              
              <div className="featureCard">
                <div className="featureIcon">👨‍🍳</div>
                <h3>Master Pizzaiolos</h3>
                <p>Trained in Naples with over 20 years of experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Touch */}
      <div className="signature">
        <p className="signatureText">"Every pizza tells a story. We're just honored to be the authors."</p>
        <p className="signatureName">— Giovanni Rossi, Founder</p>
      </div>
    </div>
  );
}

export default About;