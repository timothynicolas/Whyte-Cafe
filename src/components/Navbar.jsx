import hamburgerIcon from "../assets/navbar/hamburger-icon.svg";
import UtensilIcon from "../assets/hero/utensil.svg";
import whyteLogo from "../assets/WhyteLogo.svg";

export function Navbar() {
  return (
    <div className="flex justify-between ">
      <img src={whyteLogo} className="w-12.5 cursor-pointer" />
      <div className="hidden lg:flex gap-8 text-[1.2rem]  ">
        <button className="font-family-dmsans cursor-pointer">Home</button>
        <button className="font-family-dmsans cursor-pointer">Menu</button>
        <button className="font-family-dmsans cursor-pointer">Catering</button>
      </div>
      <img src={hamburgerIcon} className="cursor-pointer lg:hidden" />
      <button className="hidden lg:flex primary-btn ">
        View Menu
        <img src={UtensilIcon} alt="utensil icon" />
      </button>
    </div>
  );
}
