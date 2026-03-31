import styles from './events.module.css'

import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import arrow from "../assets/arrow.svg";
import clockSvg from "../assets/clock.svg";

export function Events() {
  return (
    <div className={styles.eventContainer}>
      <p className={styles.header}>What's Brewing</p>
      <div className={styles.cardsContainer}>
        <div className={styles.eventCard}>
          <img className={styles.eventImg} src={event1} />
          <div className={styles.eventDetailsContainer}>
            <div className={styles.eventDetails}>
              <p className={styles.eventTitle}>A Sweet Moment for Every Mom</p>
              <p className={styles.eventDesc}>
                Celebrate the most special woman in your life with a cozy treat
                at Whyte Café . Enjoy a complimentary dessert for every mom and
                capture memories with our floral-themed photo corner — available
                all weekend long.
              </p>
              <div className={styles.eventDuration}>
                <img src={clockSvg} />
                <p>6 days left</p>
              </div>
            </div>
            <button className={styles.button}>
              Learn More <img src={arrow} />
            </button>
          </div>
        </div>
        {/* NEW CARD */}
        <div className={styles.eventCard}>
          <img className={styles.eventImg} src={event2} />
          <div className={styles.eventDetailsContainer}>
            <div className={styles.eventDetails}>
              <p className={styles.eventTitle}>TGIF: Drinks on Us!</p>
              <p className={styles.eventDesc}>
                Celebrate Fridays with your friends at Whyte Café! For every 3
                drinks ordered in a single transaction, you’ll get 1 drink free.
                Gather your crew, sip, and make your weekend start right —
                available every Friday from 5 PM - 10 PM.
              </p>
              <div className={styles.eventDuration}>
                <img src={clockSvg} />
                <p>6 days left</p>
              </div>
            </div>
            <button className={styles.button}>
              Learn More <img src={arrow} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
