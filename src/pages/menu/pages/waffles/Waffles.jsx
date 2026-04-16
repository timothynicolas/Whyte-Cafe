// import styles from "./waffles.module.css";

import { Navbar } from "../../../../components/navbar/Navbar";
import { Footer } from "../../../../components/footer/Footer";

export function Waffles(){
   return (
      <div className="container main-container" >
        <Navbar />
        <h1>Waffles</h1>
        <Footer />
      </div>
    );
}

