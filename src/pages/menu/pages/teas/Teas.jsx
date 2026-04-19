// import styles from "./teas.module.css";

import { Navbar } from "../../../../components/navbar/Navbar";
import { Footer } from "../../../../components/footer/Footer";
import { MenuTemplate } from "../../MenuTemplate";

export function Teas() {
  return (
    <div className="container main-container">
      <Navbar />
      <MenuTemplate title="Teas"/>
      <Footer />
    </div>
  );
}
