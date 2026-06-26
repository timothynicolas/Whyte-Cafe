import styles from "../catering.module.css";

import UserIcon from "../../../assets/catering/user.svg?react";
import EmailIcon from "../../../assets/catering/email.svg?react";
import PhoneIcon from "../../../assets/catering/mobile-phone.svg?react";

// function isValidEmail(email) {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

export function Step3({ formData, onChange, isValidEmail }) {
  return (
    <>
      {/* Full Name */}
      <div className={styles.fieldContainer}>
        <label>
          <UserIcon />
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
        </div>
      </div>
      {/* Email */}
      <div className={styles.fieldContainer}>
        <label>
          <EmailIcon />
          Email <span style={{ color: "red" }}>* {formData.email && !isValidEmail(formData.email) && (
            <span className={styles.errorText}>Please enter a valid email</span>
          )}</span>
        </label>

        <div className={styles.fieldWrapper}>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => onChange("email", e.target.value)}
            placeholder="example@gmail.com"
            className={styles.field}
          />
          
        </div>
      </div>

      {/* Phone */}
      <div className={styles.fieldContainer}>
        <label>
          <PhoneIcon />
          Phone{" "}
          <span style={{ color: "red" }}>
            *{" "}
            {formData.phone && formData.phone.length !== 11 && (
              <span className={styles.errorText}>
                Phone number must be 11 digits
              </span>
            )}
          </span>
        </label>

        <div className={styles.fieldWrapper}>
          <input
            type="text"
            inputMode="numeric"
            value={formData.phone}
            onChange={(e) => {
              const digitsOnly = e.target.value.replace(/\D/g, "");
              if (digitsOnly.length <= 11) {
                onChange("phone", digitsOnly);
              }
            }}
            placeholder="09123456789"
            className={styles.field}
            maxLength={11}
          />
        </div>
      </div>
    </>
  );
}
