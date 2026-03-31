import styles from "./reviews.module.css";

import profileIcon from "../assets/Profile Icon.png";
import star from "../assets/star.svg";
import img1 from "../assets/imgReview1.png";
import img2 from "../assets/imgReview2.png";

export function Reviews() {
  return (
    <div className={styles.container}>
      <p className={styles.header}>What They're Saying</p>
      <div className={styles.reviewsContainer}>
        <div className={styles.cardsContainer}>
          <div className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
              <img src={profileIcon} />
              <div>
                <p className={styles.name}>Leila Mae Martinez</p>
                <div className={styles.starContainer}>
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
              </div>
            </div>
            <p className={styles.comment}>
              The atmosphere at Whyte Café is so cozy — I could stay here all
              day. The Caramel Macchiato was amazing; it's creamy but refreshing
              at the same time. Perfect spot to work or just unwind.
            </p>
            <div className={styles.imgContainer}>
              <img className={styles.img} src={img1} />
              <img className={styles.img} src={img2} />
            </div>
          </div>

          {/* REVIEW 2 */}
          
          <div className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
              <img src={profileIcon} />
              <div>
                <p className={styles.name}>Leila Mae Martinez</p>
                <div className={styles.starContainer}>
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
              </div>
            </div>
            <p className={styles.comment}>
              The atmosphere at Whyte Café is so cozy — I could stay here all
              day. The Caramel Macchiato was amazing; it's creamy but refreshing
              at the same time. Perfect spot to work or just unwind.
            </p>
            <div className={styles.imgContainer}>
              <img className={styles.img} src={img1} />
              <img className={styles.img} src={img2} />
            </div>
          </div>

          {/* REVIEW 3 */}
          
          <div className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
              <img src={profileIcon} />
              <div>
                <p className={styles.name}>Leila Mae Martinez</p>
                <div className={styles.starContainer}>
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
              </div>
            </div>
            <p className={styles.comment}>
              The atmosphere at Whyte Café is so cozy — I could stay here all
              day. The Caramel Macchiato was amazing; it's creamy but refreshing
              at the same time. Perfect spot to work or just unwind.
            </p>
            <div className={styles.imgContainer}>
              <img className={styles.img} src={img1} />
              <img className={styles.img} src={img2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
