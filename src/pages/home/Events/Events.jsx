import styles from "./events.module.css";

import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import arrow from "../assets/arrow.svg";
import clockSvg from "../assets/clock.svg";

export function Events() {
  const events = [
    {
      id: 1,
      title: "A Sweet Moment for Every Mom",
      description: "Celebrate the most special woman in your life with a cozy treat at Whyte Cafe. Enjoy a complimentary dessert for every mom and capture memories with our floral-themed photo corner - available all weekend long.",
      image: event1,
      endDate: "2026-05-28", 
      link: "https://youtube.com"
    },
    {
      id: 2,
      title: "TGIF: Drinks on Us!",
      description: "Celebrate Fridays with your friends at Whyte Cafe! For every 3 drinks ordered in a single transaction, you'll get 1 drink free. Gather your crew, sip, and make your weekend start right - available every Friday from 5 PM - 10 PM.",
      image: event2,
      endDate: "2026-05-31",
      link: "https://youtube.com"
    },
  ];

  function getDaysLeft(endDate) {
    const today = new Date();
    const end = new Date(endDate);
    const diff = Math.ceil((end - today) / (1000 * 60 * 60 * 24));
    if (diff < 0) return "Ended";
    if (diff === 0) return "Last day!";
    return `${diff} day${diff !== 1 ? "s" : ""} left`;
  }

  return (
    <div className={styles.eventContainer}>
      <p className={styles.header}>What's Brewing</p>
      <div className={styles.cardsContainer}>
        {events.map((event) => (
          <div className={styles.eventCard} key={event.id}>
            <img className={styles.eventImg} src={event.image} />
            <div className={styles.eventDetailsContainer}>
              <div className={styles.eventDetails}>
                <p className={styles.eventTitle}>{event.title}</p>
                <p className={styles.eventDesc}>{event.description}</p>
                <div className={styles.eventDuration}>
                  <img src={clockSvg} />
                  <p>{getDaysLeft(event.endDate)}</p>
                </div>
              </div>
              <a href={event.link} target="_blank" className={styles.button}>
                Learn More <img src={arrow} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
