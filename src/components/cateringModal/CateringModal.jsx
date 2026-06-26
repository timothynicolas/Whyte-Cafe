import { Link } from "react-router-dom";

import submissionSuccess from "../../assets/catering/submission-success.svg";

import styles from "./cateringmodal.module.css";

export function CateringModal() {
  return (
    <div className={`${styles.modalOverlay}`}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={submissionSuccess} className={styles.successIcon}/>
        <p className={styles.title}>Request Sent</p>
        <p className={styles.description}>
          We've received your details. Sit tight — we'll reach out shortly with
          your custom quote and next steps.
        </p>
        <Link to="/home" className={styles.closeBtnLink} >
          <button className={styles.closeBtn}>Back to Home</button>
        </Link>
      </div>
    </div>
  );
}
