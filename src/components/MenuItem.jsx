import React, { useState } from "react";
import { FaLeaf, FaPepperHot, FaStar, FaCartPlus, FaCrown, FaRegClock, FaRegStar } from "react-icons/fa";

function MenuItem({ 
  image, 
  name, 
  price, 
  description = "A delicious creation from our master pizzaiolos",
  isSpicy = false,
  isVegetarian = false,
  isVegan = false,
  isPopular = false,
  isSignature = false,
  isLuxury = false,
  rating = 4.5,
  cookTime = "12-15 min"
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 1000);
    console.log(`Added ${name} to cart for $${price}`);
  };

  // Render star rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="star full" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaRegStar key="half" className="star half" />);
    }
    
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="star empty" />);
    }
    
    return stars;
  };

  return (
    <div 
      className={`menuItem ${isSignature ? 'signature' : ''} ${isLuxury ? 'luxury' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with Overlay */}
      <div className="itemImage" style={{ backgroundImage: `url(${image})` }}>
        <div className={`imageOverlay ${isHovered ? 'active' : ''}`}>
          <button 
            className="quickView"
            onClick={() => console.log(`View details for ${name}`)}
          >
            View Details
          </button>
        </div>
        
        {/* Badges */}
        <div className="itemBadges">
          {isSignature && (
            <div className="badge signature" >
              <FaCrown /> Signature
            </div>
          )}
          {isLuxury && (
            <div className="badge luxury">
              <FaCrown /> Luxury
            </div>
          )}
          {isPopular && (
            <div className="badge popular">
              <FaStar /> Popular
            </div>
          )}
          {isVegetarian && (
            <div className="badge vegetarian">
              <FaLeaf /> {isVegan ? 'Vegan' : 'Vegetarian'}
            </div>
          )}
          {isSpicy && (
            <div className="badge spicy">
              <FaPepperHot /> Spicy
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="itemContent">
        <div className="itemHeader">
          <h3 className="itemName">{name}</h3>
          <div className="itemPrice">${price.toFixed(2)}</div>
        </div>
        
        {/* Rating and Cook Time */}
        <div className="itemMeta">
          <div className="rating">
            {renderStars()}
            <span className="ratingValue">{rating.toFixed(1)}</span>
          </div>
          <div className="cookTime">
            <FaRegClock />
            <span>{cookTime}</span>
          </div>
        </div>
        
        <p className="itemDescription">{description}</p>
        
        <div className="itemActions">
          <button 
            className={`addToCart ${isAdding ? 'adding' : ''} ${isLuxury ? 'luxury' : ''}`}
            onClick={handleAddToCart}
          >
            <FaCartPlus />
            {isAdding ? 'Added!' : `Add${isLuxury ? '' : ''}`}
          </button>
          <button className="customize">Customize</button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;