// import styles from "./coffees.module.css";

import { Navbar } from "../../../../components/navbar/Navbar";
import { Footer } from "../../../../components/footer/Footer";

export function Coffees(){
   return (
      <div className="container main-container" >
        <Navbar />
        <h1>Coffees</h1>
        <Footer />
      </div>
    );
}

