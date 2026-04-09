import "./home.css";

import { Navbar } from "../../components/navbar/Navbar";
import { LatestCreation } from "./LatestCreation/LatestCreation";
import { WhyteSpecials } from "./WhyteSpecials/WhyteSpecials";
import { Reviews } from "./Reviews/Reviews";
import { Events } from "./Events/Events";
import { StoreHours } from "./StoreHours/StoreHours";
import { Footer } from "../../components/footer/Footer";

export function Home() {
  return (
    <div className="container main-container">
      <Navbar />
      <LatestCreation />
      <WhyteSpecials />
      <Reviews />
      <Events />
      <StoreHours />
      <Footer />
    </div>
  );
}
