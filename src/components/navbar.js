import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Menu toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Jab link click ho to menu band ho jaye
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo2.png" alt="Logo" />
      </div>

      {/* Menu Icon (Mobile) */}
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      {/* Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/faculty" onClick={closeMenu}>Faculty</Link>
        </li>
        <li>
          <Link to="/achievements" onClick={closeMenu}>Achievements</Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>Contact us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
