import React, { useState, useEffect, useRef } from "react"; // Added useRef here
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhone, FaCalendarAlt, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import Logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const lastScrollY = useRef(0);
    const location = useLocation();

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    // Handle scroll effect for hide/show
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Check if scrolled past 50px
            setIsScrolled(currentScrollY > 50);
            
            // Hide/show logic with threshold
            if (currentScrollY > lastScrollY.current && currentScrollY > 100 && !openMenu) {
                // Scrolling down - hide navbar
                setIsHidden(true);
            } else if (currentScrollY < lastScrollY.current || currentScrollY <= 100) {
                // Scrolling up or near top - show navbar
                setIsHidden(false);
            }
            
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [openMenu]); // Added openMenu as dependency

    // Close menu on route change
    useEffect(() => {
        setOpenMenu(false);
    }, [location]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (openMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [openMenu]);

    const navLinks = [
        { path: "/", label: "HOME" },
        { path: "/menu", label: "MENU" },
        { path: "/about", label: "ABOUT" },
        { path: "/reservation", label: "RESERVATIONS", icon: <FaCalendarAlt /> },
        { path: "/contact", label: "CONTACT" },
    ];

    // Build navbar classes
    const navbarClasses = `navbar 
        ${isHidden ? 'navbar-hidden' : ''} 
        ${isScrolled ? 'navbar-scrolled' : 'navbar-top'} 
        ${openMenu ? 'menu-open' : ''}`;

    return (
        <>
            {/* Top Bar */}
            <div className="topBar">
                <div className="container">
                    <div className="topBarContent">
                        <div className="contactInfo">
                            <span><FaPhone /> +1 (555) 123-4567</span>
                            <span>|</span>
                            <span>Open Today: 11:00 AM - 11:00 PM</span>
                        </div>
                        <div className="socialIcons">
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" aria-label="Facebook"><FaFacebook /></a>
                            <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={navbarClasses}>
                <div className="container">
                    <div className="navContainer">
                        {/* Logo */}
                        <div className="logo">
                            <Link to="/" className="logoLink">
                                <img src={Logo} alt="La Cucina di Pregio" />
                                <div className="logoText">
                                    <span className="logoTitle">La Cucina</span>
                                    <span className="logoSubtitle">di Pregio</span>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="navLinks">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`navLink ${location.pathname === link.path ? 'active' : ''}`}
                                >
                                    {link.icon && <span className="linkIcon">{link.icon}</span>}
                                    <span className="linkText">{link.label}</span>
                                    <span className="linkHover"></span>
                                </Link>
                            ))}
                            <Link to="/menu" className="menuButton">
                                <MdRestaurantMenu />
                                <span>ORDER NOW</span>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button 
                            className="menuToggle" 
                            onClick={toggleMenu}
                            aria-label={openMenu ? "Close menu" : "Open menu"}
                        >
                            {openMenu ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`mobileMenu ${openMenu ? 'open' : ''}`}>
                    <div className="mobileMenuContent">
                        <div className="mobileLogo">
                            <img src={Logo} alt="La Cucina di Pregio" />
                            <h2>La Cucina di Pregio</h2>
                        </div>
                        
                        <div className="mobileLinks">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`mobileLink ${location.pathname === link.path ? 'active' : ''}`}
                                    onClick={() => setOpenMenu(false)}
                                >
                                    {link.icon && <span className="mobileIcon">{link.icon}</span>}
                                    <span className="mobileText">{link.label}</span>
                                </Link>
                            ))}
                        </div>

                        <div className="mobileContact">
                            <div className="contactItem">
                                <FaPhone />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <Link to="/reservation" className="mobileReserveButton" onClick={() => setOpenMenu(false)}>
                                <FaCalendarAlt />
                                <span>RESERVE TABLE</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;