import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";

import { Beverages } from "./Beverages/Beverages";
import { Food } from "./Food/Food";

export function Menu() {
  return (
    <>
      <Navbar />
      <div className="container main-container">
        <Beverages />
        <Food />
        <Footer />
      </div>
    </>
  );
}
