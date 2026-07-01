import styles from "./hero.module.css";

import { Link } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";

import HeroImage from "../../assets/hero/hero-img.png";
import HeroImageWide from "../../assets/hero/hero-desktop.png";
import UtensilIcon from "../../assets/hero/utensil.svg";
import ConciergeIcon from "../../assets/hero/concierge.svg";

export function Hero() {
  return (
    <>
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.textContainer}>
          <p className={styles.heroSubtext}>YOU CAN NEVER GO WRONG WITH</p>
          <p className={styles.heroMaintext}>
            WHYTE <br /> CAFE
          </p>
          <div className={styles.btnContainer}>
            <Link to="/menu">
              <button className={styles.primaryBtnWide}>
                View Menu
                <img src={UtensilIcon} alt="utensil icon" />
              </button>
            </Link>
            <Link to="/catering">
              <button className={styles.secondaryBtnWide}>
                Book Catering
                <img src={ConciergeIcon} alt="utensil icon" />
              </button>
            </Link>
          </div>
        </div>
        <img src={HeroImage} className={styles.heroImg} />
        <img src={HeroImageWide} className={styles.heroImgWide} />
        <div className={styles.container}>
          <Link to="/menu">
            <button className={styles.heroBtn}>
              View Menu
              <img src={UtensilIcon} alt="utensil icon" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
