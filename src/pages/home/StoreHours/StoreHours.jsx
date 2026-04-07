import styles from "./store-hours.module.css";

// import storeHoursImg from "../assets/storeHoursImg.png";
import storeHoursImg2 from "../assets/storeHoursImg2.png";
import locationIcon from "../assets/location.svg";
import clockIcon from "../assets/clock2.svg";
import angleDown from "../assets/angleDown.svg";
import angleUp from "../assets/angleUp.svg";
import { useState } from "react";

export function StoreHours() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);
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
              <p>Closed. Opens 10 AM</p>
              <img src={open? angleUp : angleDown} />
              {/* <p>{open ? "Open" : "Closed"}</p> */}
            </div>
            <div
              className={`${styles.hoursContent} ${open ? styles.open : ""}`}
            >
              <div className={styles.daysContainer}>
                <p>Monday</p>
                <p>Tuesday</p>
                <p>Wednesday</p>
                <p>Thursday</p>
                <p>Friday</p>
                <p>Saturday</p>
                <p>Sunday</p>
              </div>

              <div className={styles.timeContainer}>
                <p>10 AM - 9 PM</p>
                <p>10 AM - 9 PM</p>
                <p>10 AM - 9 PM</p>
                <p>10 AM - 9 PM</p>
                <p>10 AM - 10 PM</p>
                <p>10 AM - 10 PM</p>
                <p>10 AM - 10 PM</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
