import styles from "./footer.module.css";
import facebook from "../../assets/footer/facebook.svg";
import instagram from "../../assets/footer/instagram.svg";
import email from "../../assets/footer/email.svg";

export function Footer() {
  return (
    <div className={styles.container}>
      <hr className={styles.hr} />
      <p className={styles.footerText}>© 2026 Whyte Cafe, Philippines</p>
      <div className={styles.socialLinkContainer}>
        <a href="https://www.facebook.com/profile.php?id=61574877994032">
          <img className={styles.socialLink} src={facebook} />
        </a>
        <a href="https://www.instagram.com/thewhytecafe/">
          <img className={styles.socialLink} src={instagram} />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&to=whytecafe@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.socialLink} src={email} />
        </a>
      </div>
    </div>
  );
}
