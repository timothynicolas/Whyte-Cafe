import "./navbar.css";

import hamburgerIcon from "../../assets/navbar/hamburger-icon.svg";
import UtensilIcon from "../../assets/hero/utensil.svg";
import whyteLogo from "../../assets/WhyteLogo.svg";

export function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img className="navbar-logo" src={whyteLogo} alt="whyte cafe logo" />
      </div>
      <div className="navbar-btn-container">
        <button className="nav-btn">Home</button>
        <button className="nav-btn">Menu</button>
        <button className="nav-btn">Catering</button>
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
