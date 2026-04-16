// import styles from "./sandwiches.module.css";

import { Navbar } from "../../../../components/navbar/Navbar";
import { Footer } from "../../../../components/footer/Footer";

export function Sandwiches(){
   return (
      <div className="container main-container" >
        <Navbar />
        <h1>Sandwiches</h1>
        <Footer />
      </div>
    );
}

