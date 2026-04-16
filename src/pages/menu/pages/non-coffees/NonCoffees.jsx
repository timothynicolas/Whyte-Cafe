// import styles from "./noncoffees.module.css";

import { Navbar } from "../../../../components/navbar/Navbar";
import { Footer } from "../../../../components/footer/Footer";

export function NonCoffees(){
   return (
      <div className="container main-container" >
        <Navbar />
        <h1>Non-Coffees</h1>
        <Footer />
      </div>
    );
}

