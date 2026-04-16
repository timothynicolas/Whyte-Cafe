// import styles from "./starters.module.css";

import { Navbar } from "../../../../components/navbar/Navbar";
import { Footer } from "../../../../components/footer/Footer";

export function Starters(){
   return (
      <div className="container main-container" >
        <Navbar />
        <h1>Starters</h1>
        <Footer />
      </div>
    );
}

