import React, { useState, useEffect } from "react";
import { MenuList, MenuCategories } from "../MenuData/MenuList";
import MenuItem from "../components/MenuItem.jsx";
import { FaStar, FaFire, FaLeaf, FaPepperHot, FaCrown } from "react-icons/fa";
import "../styles/Menu.css";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [filteredItems, setFilteredItems] = useState(MenuList);

  // Filter and sort items
  useEffect(() => {
    let items = [...MenuList];
    
    // Filter by category
    if (activeCategory !== "all") {
      items = items.filter(item => item.category === activeCategory);
    }
    
    // Sort items
    switch (sortBy) {
      case "price-low":
        items.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        items.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        items.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
        items = items.filter(item => item.isPopular).concat(
          items.filter(item => !item.isPopular)
        );
        break;
      default:
        // Featured (default) - signature first, then popular, then others
        items.sort((a, b) => {
          if (a.isSignature && !b.isSignature) return -1;
          if (!a.isSignature && b.isSignature) return 1;
          if (a.isPopular && !b.isPopular) return -1;
          if (!a.isPopular && b.isPopular) return 1;
          return b.rating - a.rating;
        });
    }
    
    setFilteredItems(items);
  }, [activeCategory, sortBy]);

  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
    { value: "popular", label: "Most Popular" },
  ];

  // Calculate menu statistics
  const menuStats = {
    totalItems: MenuList.length,
    vegetarianItems: MenuList.filter(item => item.isVegetarian).length,
    spicyItems: MenuList.filter(item => item.isSpicy).length,
    signatureItems: MenuList.filter(item => item.isSignature).length,
  };

  return (
    <div className="menu">
      {/* Hero Section */}
      <div className="menuHero">
        <div className="heroContent">
          <h1 className="heroTitle">Our Culinary Creations</h1>
          <p className="heroSubtitle">Artisan Pizzas Crafted with Passion</p>
          <div className="heroDivider"></div>
          <p className="heroDescription">
            Each pizza is a masterpiece, combining traditional techniques with innovative flavors
          </p>
        </div>
      </div>

      {/* Menu Controls */}
      <div className="menuControls">
        <div className="container">
          <div className="controlsWrapper">
            {/* Categories */}
            <div className="categories">
              <div className="categoriesLabel">Categories</div>
              <div className="categoriesList">
                {MenuCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`categoryButton ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.label}
                    {category.id === "vegetarian" && <FaLeaf className="categoryIcon" />}
                    {category.id === "seasonal" && <FaFire className="categoryIcon" />}
                    {category.id === "gourmet" && <FaCrown className="categoryIcon" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort By */}
            <div className="sortBy">
              <label htmlFor="sortSelect">Sort By</label>
              <select
                id="sortSelect"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sortSelect"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="menuMain">
        <div className="container">
          <div className="menuStats">
            <div className="statCard">
              <FaCrown className="statIcon" />
              <div>
                <h3>{menuStats.totalItems}+</h3>
                <p>Exclusive Items</p>
              </div>
            </div>
            <div className="statCard">
              <FaLeaf className="statIcon" />
              <div>
                <h3>{menuStats.vegetarianItems}</h3>
                <p>Vegetarian Options</p>
              </div>
            </div>
            <div className="statCard">
              <FaPepperHot className="statIcon" />
              <div>
                <h3>{menuStats.spicyItems}</h3>
                <p>Spicy Varieties</p>
              </div>
            </div>
            <div className="statCard">
              <FaStar className="statIcon" />
              <div>
                <h3>{menuStats.signatureItems}</h3>
                <p>Signature Specials</p>
              </div>
            </div>
          </div>

          <div className="menuGrid">
            {filteredItems.map((menuItem, index) => (
              <MenuItem
                key={index}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
                description={menuItem.description}
                isSpicy={menuItem.isSpicy}
                isVegetarian={menuItem.isVegetarian}
                isPopular={menuItem.isPopular}
                rating={menuItem.rating}
                cookTime={menuItem.cookTime}
                isSignature={menuItem.isSignature}
                isVegan={menuItem.isVegan}
                isLuxury={menuItem.isLuxury}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Special Offers */}
      <div className="specialOffers">
        <div className="container">
          <div className="offerBanner">
            <div className="offerContent">
              <h2>Chef's Weekly Special</h2>
              <h3>La Cucina Signature Pizza</h3>
              <p>Black truffle, wild mushrooms, Iberico ham, burrata cheese, truffle oil</p>
              <div className="offerPrice">
                <span className="oldPrice">$89.99</span>
                <span className="newPrice">$74.99</span>
              </div>
              <p className="offerNote">Available this week only | Limited quantity</p>
              <button className="offerButton">Order Special</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;