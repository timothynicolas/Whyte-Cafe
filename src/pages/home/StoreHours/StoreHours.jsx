import styles from "./store-hours.module.css";

import storeHoursImg from "../assets/storeHoursImg.png";
import locationIcon from "../assets/location.svg";
import clockIcon from "../assets/clock2.svg";

export function StoreHours() {
  return (
    <div>
      <p className={styles.header}>Drop By and Say Hello</p>
      <p className={styles.subheader}>
        We'd love to serve you in person. Stop by, relax, and enjoy your
        favorite cup!
      </p>
      <img className={styles.image} src={storeHoursImg} />
      <div className={styles.address}>
        <img src={locationIcon} />
        <p>121-B Pag-asa Street, Caniogan, Pasig </p>
      </div>
      <div className={styles.address}>
        <img src={clockIcon} />
        <p>121-B Pag-asa Street, Caniogan, Pasig </p>
      </div>
    </div>
  );
}
