import { Link, NavLink } from "react-router";

import "./navbar.css";

import hamburgerIcon from "../../assets/navbar/hamburger-icon.svg";
import UtensilIcon from "../../assets/hero/utensil.svg";
import whyteLogo from "../../assets/WhyteLogo.svg";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeSidebar = () => setIsOpen(false);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <NavLink to="/">
          <img className="navbar-logo" src={whyteLogo} alt="whyte cafe logo" />
        </NavLink>
      </div>
      <div className="navbar-btn-container">
        <NavLink to="/home">
          <button className="nav-btn">Home</button>
        </NavLink>
        <NavLink to="/menu">
          <button className="nav-btn">Menu</button>
        </NavLink>
        <NavLink to="/catering">
          <button className="nav-btn">Catering</button>
        </NavLink>
      </div>
      <div className="navbar-right">
        <img className="hamburger-btn" src={hamburgerIcon} />
        <button className="nav-cta-btn">
          View Menu
          <img src={UtensilIcon} alt="utensil icon" />
        </button>
      </div>
    </div>
  );
}
