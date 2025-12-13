import Pepperoni from "../assets/pepperoni.jpg";
import Margherita from "../assets/margherita.jpg";
import PedroTechSpecial from "../assets/pedrotechspecial.jpg";
import Vegan from "../assets/vegan.jpg";
import Pineapple from "../assets/pineapple.jpg";
import Expensive from "../assets/expensive.jpg";

export const MenuList = [
  {
    name: "Pepperoni Artigianale",
    image: Pepperoni,
    price: 24.99,
    description: "Handcrafted pepperoni, San Marzano tomato sauce, premium mozzarella, fresh oregano",
    isSpicy: true,
    isPopular: true,
    category: "classics",
    rating: 4.8,
    cookTime: "12-15 min"
  },
  {
    name: "Margherita Classica",
    image: Margherita,
    price: 19.99,
    description: "San Marzano tomatoes, buffalo mozzarella DOP, fresh basil, extra virgin olive oil",
    isVegetarian: true,
    isPopular: true,
    category: "classics",
    rating: 4.9,
    cookTime: "10-12 min"
  },
  {
    name: "La Cucina Signature",
    image: PedroTechSpecial,
    price: 489.99,
    description: "Black truffle, wild mushrooms, Iberico ham, burrata cheese, truffle oil, 24k gold leaf",
    isPopular: true,
    category: "gourmet",
    rating: 5.0,
    cookTime: "15-18 min",
    isSignature: true,
    isLuxury: true,
  },
  {
    name: "Garden of Eden",
    image: Vegan,
    price: 22.99,
    description: "Roasted vegetables, vegan mozzarella, pesto genovese, sun-dried tomatoes, pine nuts",
    isVegetarian: true,
    isVegan: true,
    category: "vegetarian",
    rating: 4.7,
    cookTime: "12-14 min"
  },
  {
    name: "Hawaiian Royale",
    image: Pineapple,
    price: 26.99,
    description: "Smoked ham, caramelized pineapple, mozzarella, tomato sauce, fresh basil",
    category: "seasonal",
    rating: 4.6,
    cookTime: "11-13 min",
    isSeasonal: true
  },
  {
    name: "Diamante Nero",
    image: Expensive,
    price: 299.99,
    description: "Black truffle, Kobe beef, Iranian saffron, caviar, 48-month aged parmesan, Dom Perignon reduction",
    category: "gourmet",
    rating: 5.0,
    cookTime: "18-20 min",
    isLuxury: true,
    isSignature: true
  },
  {
    name: "Quattro Formaggi",
    image: Pepperoni, // Replace with actual quattro formaggi image
    price: 28.99,
    description: "Mozzarella di bufala, gorgonzola dolce, pecorino romano, parmigiano reggiano",
    isVegetarian: true,
    category: "classics",
    rating: 4.8,
    cookTime: "13-15 min"
  },
  {
    name: "Diavola Inferno",
    image: Margherita, // Replace with actual diavola image
    price: 27.99,
    description: "Spicy calabrese salami, jalapeños, smoked mozzarella, chili oil, tomato sauce",
    isSpicy: true,
    category: "classics",
    rating: 4.7,
    cookTime: "12-14 min"
  },
  {
    name: "Mediterranean Breeze",
    image: Vegan, // Replace with actual mediterranean image
    price: 25.99,
    description: "Artichokes, kalamata olives, feta cheese, red onions, oregano, olive oil",
    isVegetarian: true,
    category: "vegetarian",
    rating: 4.6,
    cookTime: "11-13 min"
  },
  {
    name: "Truffle Mushroom",
    image: PedroTechSpecial, // Replace with actual truffle image
    price: 34.99,
    description: "Wild porcini mushrooms, black truffle paste, fontina cheese, thyme, truffle oil",
    isVegetarian: true,
    category: "gourmet",
    rating: 4.9,
    cookTime: "14-16 min"
  },
  {
    name: "Seafood Delight",
    image: Pineapple, // Replace with actual seafood image
    price: 32.99,
    description: "Tiger prawns, calamari, mussels, garlic, white wine sauce, parsley",
    category: "seasonal",
    rating: 4.7,
    cookTime: "15-17 min"
  },
  {
    name: "Dolce Vita",
    image: Expensive, // Replace with actual dessert pizza image
    price: 18.99,
    description: "Nutella, fresh strawberries, banana, mascarpone cream, powdered sugar",
    isVegetarian: true,
    category: "desserts",
    rating: 4.8,
    cookTime: "8-10 min",
    isDessert: true
  }
];

// Optional: Create a featured items array
export const FeaturedItems = MenuList.filter(item => item.isPopular || item.isSignature);

// Optional: Create categories array for filtering
export const MenuCategories = [
  { id: "all", label: "All" },
  { id: "classics", label: "Classics" },
  { id: "gourmet", label: "Gourmet" },
  { id: "vegetarian", label: "Vegetarian" },
  { id: "seasonal", label: "Seasonal" },
  { id: "desserts", label: "Desserts" }
];

// Optional: Sort functions
export const sortByPriceLow = (items) => 
  [...items].sort((a, b) => a.price - b.price);

export const sortByPriceHigh = (items) => 
  [...items].sort((a, b) => b.price - a.price);

export const sortByRating = (items) => 
  [...items].sort((a, b) => b.rating - a.rating);

export const sortByPopular = (items) => 
  [...items].sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));