import styles from "../catering.module.css";

import MessageIcon from "../../../assets/catering/message.svg?react";

export function Step4({ formData, onChange }) {
  return (
    <>
      <div className={styles.fieldContainer}>
        <label>
          Message/Additional Request
        </label>

        <div className={styles.fieldWrapper}>
          <textarea
            type="text"
            value={formData.message}
            onChange={(e) => onChange("message", e.target.value)}
            placeholder="e.g., We’d like to include a small dessert bar"
            className={styles.field}
          />

          <MessageIcon
            className={`${styles.fieldIcon} ${formData.message ? styles.iconFilled : ""}`}
          />
        </div>
      </div>
    </>
  );
}
