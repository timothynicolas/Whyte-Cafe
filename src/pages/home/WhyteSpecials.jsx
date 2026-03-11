import styles from "./whyte-specials.module.css";

import product1 from "../../assets/sample-products/product4.png";
import product2 from "../../assets/sample-products/product5.png";
import product3 from "../../assets/sample-products/product6.png";
import product4 from "../../assets/sample-products/product7.png";

import arrow from "./assets/arrow.svg";

export function WhyteSpecials() {
  return (
    <div className={styles.creationContainer}>
      <p className={styles.header}>Whyte Specials</p>
      <p className={styles.subheader}>
        A curated selection of Whyte’s most celebrated drinks
      </p>

      <div className={styles.cardsContainer}>
        <div className={styles.latestCreationCard}>
          <img src={product1} />
          <div className={styles.productDetails}>
            <p className={styles.productName}>Caramel Macchiato</p>
            <p className={styles.productDesc}>
              Smooth espresso layered with creamy milk and rich caramel drizzle.
            </p>
            <p className={styles.price}>110.00</p>
            {/* <div className={`${styles.tag} ${styles.mobileTag}`}>New</div> */}
          </div>
          <div className={styles.bestSeller}>Best Seller</div>
        </div>
        <div className={styles.latestCreationCard}>
          <img src={product2} />
          <div className={styles.productDetails}>
            <p className={styles.productName}>Caramel Macchiato</p>
            <p className={styles.productDesc}>
              Smooth espresso layered with creamy milk and rich caramel drizzle.
            </p>
            <p className={styles.price}>110.00</p>
            
          </div>
          <div className={styles.favorite}>Favorite</div>
        </div>
        <div className={styles.latestCreationCard}>
          <img src={product3} />
          <div className={styles.productDetails}>
            <p className={styles.productName}>Caramel Macchiato</p>
            <p className={styles.productDesc}>
              Smooth espresso layered with creamy milk and rich caramel drizzle.
            </p>
            <p className={styles.price}>110.00</p>
            
          </div>
          <div className={styles.recommended}>Recommended</div>
        </div>
        <div className={styles.latestCreationCard}>
          <img src={product4} />
          <div className={styles.productDetails}>
            <p className={styles.productName}>Caramel Macchiato</p>
            <p className={styles.productDesc}>
              Smooth espresso layered with creamy milk and rich caramel drizzle.
            </p>
            <p className={styles.price}>110.00</p>
            
          </div>
          <div className={styles.limited}>Limited</div>
        </div>
      </div>
      <button className={styles.viewMoreBtn}>
        View More <img src={arrow} />
      </button>
    </div>
  );
}
