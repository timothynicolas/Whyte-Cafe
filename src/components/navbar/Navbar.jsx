import { Link } from "react-router";

import "./navbar.css";

import hamburgerIcon from "../../assets/navbar/hamburger-icon.svg";
import UtensilIcon from "../../assets/hero/utensil.svg";
import whyteLogo from "../../assets/WhyteLogo.svg";

import xmark from "./assets/xmark.svg";
import home from "./assets/home.svg";
import utensil from "./assets/utensil.svg";
import bell from "./assets/bell-concierge.svg";

import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img
              className="navbar-logo"
              src={whyteLogo}
              alt="whyte cafe logo"
            />
          </Link>
        </div>
        <div className="navbar-btn-container">
          <Link to="/home">
            <button className="nav-btn">Home</button>
          </Link>
          <Link to="/menu">
            <button className="nav-btn">Menu</button>
          </Link>
          <Link to="/catering">
            <button className="nav-btn">Catering</button>
          </Link>
        </div>
        <div className="navbar-right">
          <img
            className="hamburger-btn"
            src={hamburgerIcon}
            onClick={() => setIsOpen(true)}
            alt="open menu"
          />
          <Link to="/menu" className="nav-cta-btn">
            View Menu
            <img src={UtensilIcon} alt="utensil icon" />
          </Link>
        </div>
      </div>

      {/* Overlay — clicking it closes the sidebar */}
      <div
        className={`sidebar-overlay ${isOpen ? "sidebar-overlay--visible" : ""}`}
        onClick={closeSidebar}
      />

      {/* Sidebar panel */}
      <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        <div className="sidebar-nav-container">
          <div className="sidebar-header">
            <img src={whyteLogo} className="whyte-logo" />

            <button className="sidebar-close-btn" onClick={closeSidebar}>
              <img src={xmark} />
            </button>
          </div>

          <nav className="sidebar-nav">
            <Link to="/home" className="sidebar-link" onClick={closeSidebar}>
              <img src={home} /> Home
            </Link>
            <Link to="/menu" className="sidebar-link" onClick={closeSidebar}>
              <img src={utensil} /> Menu
            </Link>
            <Link
              to="/catering"
              className="sidebar-link"
              onClick={closeSidebar}
            >
              <img src={bell} /> Catering
            </Link>
          </nav>
        </div>

        {/* BUTTON CONTAINER */}
        <div className="sidebar-btn-container">
          <Link to="/menu" className="sidebar-cta-btn" onClick={closeSidebar}>
            View Menu
            <img src={UtensilIcon} alt="utensil icon" />
          </Link>
          <Link to="/catering" className="sidebar-secondary-btn" onClick={closeSidebar}>
            Book Catering
            <img src={bell} alt="utensil icon" />
          </Link>
        </div>
      </div>
    </>
  );
}
