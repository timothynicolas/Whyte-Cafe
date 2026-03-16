import "./home.css";

import { Navbar } from "../../components/navbar/Navbar";
import { LatestCreation } from "./LatestCreation";
import { WhyteSpecials } from "./WhyteSpecials";
import { Reviews } from "./Reviews";
import { Events } from "./Events";

export function Home() {
  return (
    <div className="container main-container">
      <Navbar />
      <LatestCreation />
      <WhyteSpecials />
      {/* <Reviews /> */}
      <Events />
    </div>
  );
}
