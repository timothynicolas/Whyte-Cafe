import HeroImage from "../../assets/hero/hero-img.png";
import UtensilIcon from "../../assets/hero/utensil.svg";

export function Hero() {
  return (
    <div>
      <div>
        <p>
          YOU CAN NEVER GO WRONG WITH
        </p>

        <p>
          WHYTE CAFE
        </p>
      </div>

      <img
       
        src={HeroImage}
        alt="Whyte Cafe hero"
      />

      <button>
        View Menu
        <img src={UtensilIcon} alt="utensil icon" />
      </button>
    </div>
  );
}
