import styles from "../catering.module.css";

import UserIcon from "../../../assets/catering/user.svg?react";
import EmailIcon from "../../../assets/catering/email.svg?react";
import PhoneIcon from "../../../assets/catering/mobile-phone.svg?react";


export function Step3({ formData, onChange }) {
  return (
    <>
      {/* Full Name */}
      <div className={styles.fieldContainer}>
        <label>
          Full Name <span style={{ color: "red" }}>*</span>
        </label>

        <div className={styles.fieldWrapper}>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
            placeholder="Juan Dela Cruz"
            className={styles.field}
          />

          <UserIcon
            className={`${styles.fieldIcon} ${formData.fullName ? styles.iconFilled : ""}`}
          />
        </div>
      </div>
      {/* Email */}
      <div className={styles.fieldContainer}>
        <label>
          Email <span style={{ color: "red" }}>*</span>
        </label>

        <div className={styles.fieldWrapper}>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => onChange("email", e.target.value)}
            placeholder="Juan Dela Cruz"
            className={styles.field}
          />

          <EmailIcon
            className={`${styles.fieldIcon} ${formData.fullName ? styles.iconFilled : ""}`}
          />
        </div>
      </div>
      {/* Phone */}
      <div className={styles.fieldContainer}>
        <label>
          Phone <span style={{ color: "red" }}>*</span>
        </label>

        <div className={styles.fieldWrapper}>
          <input
            type="number"
            value={formData.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            placeholder="Juan Dela Cruz"
            className={styles.field}
          />

          <PhoneIcon
            className={`${styles.fieldIcon} ${formData.fullName ? styles.iconFilled : ""}`}
          />
        </div>
      </div>

      
     
    </>
  );
}
