import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const scrollWithOffset = (el) => {
    const yOffset = -70;
    const yCoordinate =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yCoordinate, behavior: "smooth" });
  };

  const isActive = (path) => location.pathname === path;

  // Close mobile menu and dropdown when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setDropdownVisible(false);
  }, [location]);

  return (
    <nav className="navbar">
 <a href="/" style={{textDecoration:"none"}} >
 <div className="navbar-logo">
        <img
          src="/images/logo.png"
          alt="Profile"
          className="navbar-profile-pic"
        />
        <span  className="navbar-brand">Bulk Bytes</span>
      </div>
 </a>

      {/* Hamburger/Cross Toggle */}
      <div
        className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-expanded={isMobileMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-menu ${isMobileMenuOpen ? "show" : ""}`}>
        <li className={isActive("/") ? "active" : ""}>
          <Link to="/">
            <i style={{ fontSize: "20px" }} className="fa-solid fa-house"></i>
          </Link>
        </li>
        <li className={isActive("/about") ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
        <li
          className="menu-item"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <span className="dropdown-trigger">Services</span>
          <ul className={`dropdown-menu ${dropdownVisible ? "show" : ""}`}>
            {[
              { path: "/services/web-development", label: "Web Development" },
              { path: "/services/custom-softwares", label: "Custom Softwares" },
              {
                path: "/services/mobile-app-development",
                label: "Mobile App Development",
              },
              { path: "/services/ai-development", label: "AI Development" },
            ].map(({ path, label }) => (
              <li key={path}>
                <Link to={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li className={isActive("/team-members") ? "active" : ""}>
          <Link to="/team-members">Our Team</Link>
        </li>
        <li className={isActive("/portfolio") ? "active" : ""}>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className={isActive("/contact") ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={isActive("/career") ? "active" : ""}>
          <HashLink to="/#faqs" scroll={scrollWithOffset}>
            FAQs
          </HashLink>
        </li>
      </ul>

<div className="contactinfo">
<i class="fa-solid fa-phone"></i> <a href="tel:+92314-6572538" style={{textDecoration:"none",color:"gray"}}> +92314-6572538</a>
  </div> 
    </nav>
  );
};

export default Navbar;
