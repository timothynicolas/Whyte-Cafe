import HeroImage from "../../assets/hero/hero-img.png";
import UtensilIcon from "../../assets/hero/utensil.svg";

export function Hero() {
  return (
    <div className="flex flex-col  items-center">
      <div className="absolute bottom-[47%]">
        <p className="font-family-spgothic text-huge text-text-secondary text-center ">
          YOU CAN NEVER GO WRONG WITH
        </p>

        <p className="font-family-spgothic text-huger text-text-primary text-center tracking-tight">
          WHYTE CAFE
        </p>
      </div>

      <img
        className="absolute bottom-0"
        src={HeroImage}
        alt="Whyte Cafe hero"
      />

      <button className="primary-btn absolute bottom-14 left-9 right-9">
        View Menu
        <img src={UtensilIcon} alt="utensil icon" />
      </button>
    </div>
  );
}
