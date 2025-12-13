import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaUsers, FaPhone, FaEnvelope, FaUser, FaCheck, FaStar, FaLeaf, FaWineGlassAlt, FaMusic } from "react-icons/fa";
import "../styles/Reservation.css";

function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "dinner",
    specialRequests: "",
    subscribe: false
  });

  const [selectedTable, setSelectedTable] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Reservation submitted:", { ...formData, table: selectedTable });
      alert("Reservation confirmed! We'll send you a confirmation email shortly.");
      setIsSubmitting(false);
      setStep(3); // Success step
    }, 2000);
  };

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  // Available tables
  const tables = [
    { id: 1, name: "Window View", seats: 2, availability: ["18:00", "19:00", "20:00"], premium: true },
    { id: 2, name: "Private Booth", seats: 4, availability: ["19:00", "20:30"], premium: true },
    { id: 3, name: "Chef's Counter", seats: 2, availability: ["18:30", "20:00"], premium: false },
    { id: 4, name: "Garden Terrace", seats: 6, availability: ["19:30"], premium: true },
    { id: 5, name: "Main Hall", seats: 4, availability: ["18:00", "19:00", "20:00", "21:00"], premium: false },
    { id: 6, name: "Wine Cellar", seats: 2, availability: ["20:00"], premium: true },
  ];

  // Available time slots
  const timeSlots = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];

  const occasions = [
    { value: "dinner", label: "Dinner", icon: "🍽️" },
    { value: "anniversary", label: "Anniversary", icon: "💝" },
    { value: "birthday", label: "Birthday", icon: "🎂" },
    { value: "business", label: "Business", icon: "💼" },
    { value: "date", label: "Romantic Date", icon: "🌹" },
    { value: "celebration", label: "Celebration", icon: "🎉" },
  ];

  return (
    <div className="reservation">
      {/* Hero Section */}
      <div className="reservationHero">
        <div className="heroBackground"></div>
        
        <div className="heroContent">
          <div className="floatingElements">
            <div className="floatingElement" style={{ top: "20%", left: "10%" }}>🍷</div>
            <div className="floatingElement" style={{ top: "60%", right: "15%" }}>🍝</div>
            <div className="floatingElement" style={{ bottom: "30%", left: "20%" }}>🍕</div>
          </div>

          <div className="mainContent">
            <div className="premiumBadge">
              <FaStar />
              <span>EXCLUSIVE RESERVATIONS</span>
            </div>

            <h1 className="mainTitle">
              <span className="goldText">Reserve Your</span>
              <span className="whiteText">Culinary Experience</span>
            </h1>

            <div className="tagline">
              <span className="line"></span>
              <span className="text">SECURE YOUR TABLE AT LA CUCINA DI PREGIO</span>
              <span className="line"></span>
            </div>

            <p className="description">
              Experience an evening of gastronomic excellence. Our intimate setting, 
              curated menu, and impeccable service await your arrival.
            </p>

            {/* Progress Steps */}
            <div className="progressSteps">
              <div className={`step ${step >= 1 ? 'active' : ''}`}>
                <div className="stepNumber">1</div>
                <span className="stepLabel">Details</span>
              </div>
              <div className="stepConnector"></div>
              <div className={`step ${step >= 2 ? 'active' : ''}`}>
                <div className="stepNumber">2</div>
                <span className="stepLabel">Table Selection</span>
              </div>
              <div className="stepConnector"></div>
              <div className={`step ${step >= 3 ? 'active' : ''}`}>
                <div className="stepNumber">3</div>
                <span className="stepLabel">Confirmation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reservation Form Section */}
      <div className="reservationFormSection">
        <div className="container">
          {step === 1 && (
            <div className="formStep step1">
              <h2 className="stepTitle">Personal Details</h2>
              <p className="stepDescription">Please provide your information for the reservation</p>

              <form className="reservationForm" onSubmit={(e) => { e.preventDefault(); handleNextStep(); }}>
                <div className="formGrid">
                  <div className="formGroup">
                    <label>
                      <FaUser />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                    />
                  </div>

                  <div className="formGroup">
                    <label>
                      <FaEnvelope />
                      <span>Email Address *</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="formGroup">
                    <label>
                      <FaPhone />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                      required
                    />
                  </div>

                  <div className="formGroup">
                    <label>
                      <FaCalendarAlt />
                      <span>Date *</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className="formGroup">
                    <label>
                      <FaClock />
                      <span>Time *</span>
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  <div className="formGroup">
                    <label>
                      <FaUsers />
                      <span>Number of Guests *</span>
                    </label>
                    <div className="guestSelector">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <button
                          key={num}
                          type="button"
                          className={`guestButton ${formData.guests === num.toString() ? 'active' : ''}`}
                          onClick={() => setFormData({...formData, guests: num.toString()})}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="formActions">
                  <button type="submit" className="nextButton">
                    Next: Select Table
                    <FaArrowRight />
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="formStep step2">
              <h2 className="stepTitle">Select Your Table</h2>
              <p className="stepDescription">Choose from our premium seating options</p>

              <div className="tableGrid">
                {tables.map(table => (
                  <div 
                    key={table.id}
                    className={`tableCard ${selectedTable === table.id ? 'selected' : ''} ${table.premium ? 'premium' : ''}`}
                    onClick={() => setSelectedTable(table.id)}
                  >
                    <div className="tableHeader">
                      <h3>{table.name}</h3>
                      {table.premium && <span className="premiumBadge">Premium</span>}
                    </div>
                    
                    <div className="tableDetails">
                      <div className="detailItem">
                        <FaUsers />
                        <span>{table.seats} Guests</span>
                      </div>
                      
                      <div className="detailItem">
                        <FaClock />
                        <span>Available:</span>
                        <div className="timeSlots">
                          {table.availability.map(time => (
                            <span key={time} className="timeSlot">{time}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="tableFeatures">
                      {table.name.includes("Window") && <span>🌅 View</span>}
                      {table.name.includes("Private") && <span>🔒 Private</span>}
                      {table.name.includes("Garden") && <span>🌿 Outdoor</span>}
                      {table.name.includes("Wine") && <span>🍷 Cellar</span>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Occasion Selection */}
              <div className="occasionSection">
                <h3>Special Occasion</h3>
                <div className="occasionGrid">
                  {occasions.map(occasion => (
                    <div 
                      key={occasion.value}
                      className={`occasionCard ${formData.occasion === occasion.value ? 'selected' : ''}`}
                      onClick={() => setFormData({...formData, occasion: occasion.value})}
                    >
                      <span className="occasionIcon">{occasion.icon}</span>
                      <span className="occasionLabel">{occasion.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div className="specialRequests">
                <h3>Special Requests</h3>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Any dietary restrictions, allergies, or special arrangements..."
                  rows="4"
                />
              </div>

              <div className="formActions double">
                <button type="button" className="backButton" onClick={handlePrevStep}>
                  <FaArrowLeft />
                  Back
                </button>
                <button type="button" className="nextButton" onClick={handleNextStep}>
                  Next: Review & Confirm
                  <FaArrowRight />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="formStep step3">
              <div className="confirmationContent">
                <div className="confirmationIcon">
                  <FaCheck />
                </div>
                
                <h2 className="confirmationTitle">Reservation Confirmed!</h2>
                <p className="confirmationMessage">
                  Your table at La Cucina di Pregio has been reserved. 
                  We look forward to serving you an unforgettable dining experience.
                </p>

                <div className="reservationDetails">
                  <div className="detailCard">
                    <h3>Reservation Summary</h3>
                    <div className="detailsGrid">
                      <div className="detailItem">
                        <span className="label">Name:</span>
                        <span className="value">{formData.name}</span>
                      </div>
                      <div className="detailItem">
                        <span className="label">Date:</span>
                        <span className="value">{formData.date}</span>
                      </div>
                      <div className="detailItem">
                        <span className="label">Time:</span>
                        <span className="value">{formData.time}</span>
                      </div>
                      <div className="detailItem">
                        <span className="label">Guests:</span>
                        <span className="value">{formData.guests} people</span>
                      </div>
                      <div className="detailItem">
                        <span className="label">Table:</span>
                        <span className="value">
                          {tables.find(t => t.id === selectedTable)?.name || "Not selected"}
                        </span>
                      </div>
                      <div className="detailItem">
                        <span className="label">Occasion:</span>
                        <span className="value">
                          {occasions.find(o => o.value === formData.occasion)?.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="confirmationActions">
                  <button className="printButton" onClick={() => window.print()}>
                    Print Confirmation
                  </button>
                  <button className="homeButton" onClick={() => window.location.href = "/"}>
                    Back to Home
                  </button>
                  <button className="menuButton" onClick={() => window.location.href = "/menu"}>
                    View Menu
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Experience Highlights */}
      <div className="experienceHighlights">
        <div className="container">
          <h2 className="sectionTitle">Your Reservation Includes</h2>
          
          <div className="highlightsGrid">
            <div className="highlightCard">
              <div className="highlightIcon">
                <FaStar />
              </div>
              <h3>Welcome Drink</h3>
              <p>Complimentary glass of prosecco or artisanal mocktail</p>
            </div>
            
            <div className="highlightCard">
              <div className="highlightIcon">
                <FaLeaf />
              </div>
              <h3>Chef's Amuse-Bouche</h3>
              <p>A surprise appetizer curated by our head chef</p>
            </div>
            
            <div className="highlightCard">
              <div className="highlightIcon">
                <FaWineGlassAlt />
              </div>
              <h3>Wine Pairing</h3>
              <p>Optional curated wine pairing available</p>
            </div>
            
            <div className="highlightCard">
              <div className="highlightIcon">
                <FaMusic />
              </div>
              <h3>Live Music</h3>
              <p>Evening jazz performances (Friday & Saturday)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="contactCTA">
        <div className="container">
          <div className="ctaContent">
            <h2>Need Assistance?</h2>
            <p>Our reservation team is available to help with any special requests or questions.</p>
            <div className="contactInfo">
              <div className="contactItem">
                <FaPhone />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contactItem">
                <FaEnvelope />
                <span>reservations@lacucina.com</span>
              </div>
            </div>
            <button className="contactButton">
              Contact Reservation Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;

// Add these icon imports at the top
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";