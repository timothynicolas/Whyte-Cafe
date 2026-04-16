// import styles from "./teas.module.css";

import { Navbar } from "../../../../components/navbar/Navbar";
import { Footer } from "../../../../components/footer/Footer";

export function Teas(){
   return (
      <div className="container main-container" >
        <Navbar />
        <h1>Teas</h1>
        <Footer />
      </div>
    );
}

