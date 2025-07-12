import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css"; // Create this CSS file

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="logo">
          Logo
        </NavLink>

        {/* Mobile menu button */}
        <button
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation links */}
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="/how-it-works"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            How It Works
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
          <div className="auth-buttons">
            <NavLink to="/login" className="login-button">
              Login
            </NavLink>
            <NavLink to="/signup" className="signup-button">
              Sign Up
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
