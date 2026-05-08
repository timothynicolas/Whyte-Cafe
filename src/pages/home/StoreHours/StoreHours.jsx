import styles from "./store-hours.module.css";

import storeHoursImg2 from "../assets/storeHoursImg2.png";
import locationIcon from "../assets/location.svg";
import clockIcon from "../assets/clock2.svg";
import angleDown from "../assets/angleDown.svg";
import angleUp from "../assets/angleUp.svg";
import { useState } from "react";

const STORE_HOURS = [
  { day: "Monday", open: 10, close: 21 },
  { day: "Tuesday", open: 10, close: 21 },
  { day: "Wednesday", open: 10, close: 21 },
  { day: "Thursday", open: 10, close: 21 },
  { day: "Friday", open: 10, close: 22 },
  { day: "Saturday", open: 10, close: 22 },
  { day: "Sunday", open: 10, close: 22 },
];

function formatHour(hour) {
  if (hour === 12) return "12 PM";
  if (hour === 0) return "12 AM";
  return hour < 12 ? `${hour} AM` : `${hour - 12} PM`;
}

function getTodayIndex() {
  const jsDay = new Date().getDay(); // 0 = Sunday
  return jsDay === 0 ? 6 : jsDay - 1; // remap to 0 = Monday
}

function getStoreStatus() {
  const now = new Date();
  const currentHour = now.getHours();
  const todayIndex = getTodayIndex();
  const today = STORE_HOURS[todayIndex];

  const isOpen = currentHour >= today.open && currentHour < today.close;

  if (isOpen) {
    return `Open · Closes ${formatHour(today.close)}`;
  } else if (currentHour < today.open) {
    return `Closed · Opens ${formatHour(today.open)}`;
  } else {
    const tomorrow = STORE_HOURS[(todayIndex + 1) % 7];
    return `Closed · Opens tomorrow ${formatHour(tomorrow.open)}`;
  }
}

export function StoreHours() {
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen((prev) => !prev);

  const todayIndex = getTodayIndex();
  const storeStatus = getStoreStatus();

  return (
    <div className={styles.container}>
      {/* HEADER */}

      <div className={styles.headerContainer}>
        <p className={styles.header}>Drop By and Say Hello</p>
        <p className={styles.subheader}>
          We'd love to serve you in person. Stop by, relax, and enjoy your
          favorite cup!
        </p>
      </div>

      <div className={styles.content}>
        {/* IMAGE */}
        <div className={styles.imageContainer}>
          <img className={styles.image} src={storeHoursImg2} />
        </div>

        {/* STORE DETAILS */}

        <div className={styles.storeDetails}>
          <div className={styles.address}>
            <img src={locationIcon} />
            <p>121-B Pag-asa Street, Caniogan, Pasig </p>
          </div>

          <div className={styles.hours}>
            <div className={styles.hoursContainer} onClick={toggle}>
              <img src={clockIcon} />
              <p>{storeStatus}</p>
              <img className={styles.angle} src={open ? angleUp : angleDown} />
            </div>
            <div
              className={`${styles.hoursContent} ${open ? styles.open : ""}`}
            >
              <div className={styles.daysContainer}>
                {STORE_HOURS.map((entry, index) => (
                  <p
                    key={entry.day}
                    className={index === todayIndex ? styles.today : ""}
                  >
                    {entry.day}
                  </p>
                ))}
              </div>

              <div className={styles.timeContainer}>
                {STORE_HOURS.map((entry, index) => (
                  <p
                    key={entry.day}
                    className={index === todayIndex ? styles.today : ""}
                  >
                    {formatHour(entry.open)} - {formatHour(entry.close)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
