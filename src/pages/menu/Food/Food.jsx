import { Link } from "react-router";

import styles from "./food.module.css";

import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import food4 from "../assets/food4.png";

export function Food() {
  return (
    <div className={styles.creationContainer}>
      <p className={styles.header}>Food</p>
      

      <div className={styles.cardsContainer}>
        <Link to="/menu/starters" className={styles.latestCreationCard}>
          <img src={food1} />
          <div className={styles.productDetails}>
            <p className={styles.productName}>Starters</p>
          </div>
        </Link>
        <Link to="/menu/waffles" className={styles.latestCreationCard}>
          <img src={food2} />
          <div className={styles.productDetails}>
            <p className={styles.productName}>Waffles</p>
          </div>
        </Link>
        <Link to="/menu/sandwiches" className={styles.latestCreationCard}>
          <img src={food3} />
          <div className={styles.productDetails}>
            <p className={styles.productName}>Sandwiches</p>
          </div>
        </Link>
        <Link to="/menu/pastas" className={styles.latestCreationCard}>
          <img src={food4} />
          <div className={styles.productDetails}>
            <p className={styles.productName}>Pastas</p>
          </div>
        </Link>
      </div>
      
    </div>
  );
}
