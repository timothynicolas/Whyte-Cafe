// import styles from "./pastas.module.css";

import { Navbar } from "../../../../components/navbar/Navbar";
import { Footer } from "../../../../components/footer/Footer";

export function Pastas(){
   return (
      <div className="container main-container" >
        <Navbar />
        <h1>Pastas</h1>
        <Footer />
      </div>
    );
}

