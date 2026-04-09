import styles from "./footer.module.css";
import facebook from "../../assets/footer/facebook.svg";
import instagram from "../../assets/footer/instagram.svg";
import email from "../../assets/footer/email.svg";

export function Footer(){
  return(
    <div className={styles.container}>
      <hr className={styles.hr}/>
      <p className={styles.footerText}>© 2026 Whyte Cafe, Philippines</p>
      <div className={styles.socialLinkContainer}>
        <img className={styles.socialLink} src={facebook}/>
        <img className={styles.socialLink} src={instagram}/>
        <img className={styles.socialLink} src={email}/>
      </div>
    </div>
  );
}