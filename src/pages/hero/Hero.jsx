import "./hero.css";

import { Navbar } from "../../components/navbar/Navbar";

import HeroImage from "../../assets/hero/hero-img.png";
import UtensilIcon from "../../assets/hero/utensil.svg";

export function Hero() {
  return (
    <div className="hero container">
      <Navbar />

      <div className="hero-text-container">
        <p className="hero-subtext">YOU CAN NEVER GO WRONG WITH</p>

        <p className="hero-maintext">
          WHYTE <br />
          CAFÉ
        </p>
      </div>
      <button className="hero-btn">
        View Menu
        <img src={UtensilIcon} alt="utensil icon" />
      </button>

      <img className="hero-img" src={HeroImage} alt="Whyte Cafe hero" />
    </div>
  );
}
