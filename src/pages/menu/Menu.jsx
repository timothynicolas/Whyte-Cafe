import { Navbar } from "../../components/navbar/Navbar";

import { Beverages } from "./Beverages/Beverages";

export function Menu() {
  return (
    <div className="container" >
      <Navbar />
      <Beverages />
    </div>
  );
}