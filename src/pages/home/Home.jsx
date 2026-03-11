import "./home.css";

import { Navbar } from "../../components/navbar/Navbar";
import { LatestCreation } from "./LatestCreation";
import { WhyteSpecials } from "./WhyteSpecials";

export function Home() {
  return (
    <div className="container main-container">
      <Navbar />
      <LatestCreation />
      <WhyteSpecials />
    </div>
  );
}
