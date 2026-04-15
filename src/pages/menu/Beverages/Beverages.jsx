import styles from "./beverages.module.css";

import bev1 from "../assets/beverage1.png";
import bev2 from "../assets/beverage2.png";
import bev3 from "../assets/beverage3.png";
import bev4 from "../assets/beverage4.png";

// import arrow from "../assets/arrow.svg";

export function Beverages() {
  return (
    <div className={styles.creationContainer}>
      <p className={styles.header}>Beverages</p>
      

      <div className={styles.cardsContainer}>
        <div className={styles.latestCreationCard}>
          <img src={bev1} />
          <div className={styles.productDetails}>
            <p className={styles.productName}>Coffees</p>
          </div>
        </div>
        <div className={styles.latestCreationCard}>
          <img src={bev2} />
          <div className={styles.productDetails}>
            <p className={styles.productName}>Non-Coffee</p>
          </div>
        </div>
        <div className={styles.latestCreationCard}>
          <img src={bev3} />
          <div className={styles.productDetails}>
            <p className={styles.productName}>Teas</p>
          </div>
        </div>
        <div className={styles.latestCreationCard}>
          <img src={bev4} />
          <div className={styles.productDetails}>
            <p className={styles.productName}>Refreshers</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
